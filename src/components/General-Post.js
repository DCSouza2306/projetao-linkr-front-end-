import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillDelete,
  AiFillEdit,
  AiFillHeart,
  AiOutlineComment,
} from "react-icons/ai";
import React, { useState, useEffect, useRef} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { AuthContext } from "../context/auth-context";
import Swal from "sweetalert2";
import Comments from "./Comments";
import LinkPreview from "./LinkPreview";
import { request } from "../requests/requests.js";

export default function GeneralPost({
  id,
  urlImage,
  userId,
  name,
  content,
  link,
  setModalIsOpen,
  setIdPost,
  metaTitle,
  metaDesc,
  metaImage,
  like,
  isLiked,
  postsComments,
  commentsCount,
}) {
  const [openTextArea, setOpenTextArea] = useState(false);
  const [enableComments, setEnableComments] = useState(false);
  const [contentChange, setContentChange] = useState(content);
  const [enableInput, setEnableInput] = useState(false);
  const [enableButtons, setEnableButtons] = useState(false);
  const { userData, setRefreshTimeline, refreshTimeline } =
    React.useContext(AuthContext);
  const navigate = useNavigate();
  const inputRef = useRef();
  const config = {
    headers: { Authorization: `Bearer ${userData.token}` },
  };

  function likePost({ id }) {
    if (isLiked === false) {
      axios
        .post(`${URL_BASE}/likes/${id}`, {}, config)
        .then(() => setRefreshTimeline(!refreshTimeline))
        .catch((error) => console.log(error));
    } else {
      axios
        .delete(`${URL_BASE}/likesdelete/${id}`, config)
        .then(() => setRefreshTimeline(!refreshTimeline))
        .catch((error) => console.log(error));
    }
  }

  useEffect(() => {
    if (openTextArea) {
      inputRef.current.focus();
    }
    setContentChange(content);
  }, [openTextArea]);

  function openModal() {
    setModalIsOpen(true);
    setIdPost(id);
  }

  function changeContent(e) {
    e.preventDefault();
    setEnableInput(true);
    setOpenTextArea(true);
    const textChange = {
      content: contentChange,
    };
    axios
      .patch(`${URL_BASE}/posts/${id}`, textChange, config)
      .then(() => {
        setEnableInput(false);
        setOpenTextArea(false);
        setRefreshTimeline(!refreshTimeline);
      })
      .catch((e) => {
        setEnableInput(false);
        Swal.fire({
          width: "300px",
          title: "Error",
          text: e.response.data.message,
          icon: "error",
          button: "OK",
          closeOnEsc: true,
        });
      });
  }

  document.onkeydown = (e) => {
    if (e.key === "Escape") {
      setOpenTextArea(false);
    }
    if (e.key === "Enter" && openTextArea) {
      changeContent();
    }
  };

  function mouseOn() {
    setEnableButtons(true);
  }

  function mouseOver() {
    setEnableButtons(false);
  }

  function openComments() {
    setEnableComments(!enableComments);
  }

  function navigateUserPage() {
    navigate(`/user/${userId}`)
  }

  const comments = postsComments?.filter((p) => p["post-id"] == id);
  const count = commentsCount?.filter((p) => p["post-id"] == id);
  return (
    <>
      <Container
        showButtons={userId == userData?.userId}
        enableButtons={enableButtons}
      >
        <div className="post" onMouseEnter={mouseOn} onMouseLeave={mouseOver}>
          <div className="headerPost">
            <div className="leftSide">
              <img
                className="profilePic"
                src={urlImage}
                alt="profile picture"
                onClick={() => navigateUserPage()}
              />
              {isLiked ? (
                <AiFillHeart
                  className="iconFillHeart"
                  onClick={() => likePost({ id })}
                />
              ) : (
                <AiOutlineHeart
                  className="iconHeart"
                  onClick={() => likePost({ id })}
                />
              )}
              <p className="totalLikes">{like} likes</p>
              <AiOutlineComment
                className="iconComment"
                onClick={openComments}
              />
              <p className="total-comments">
                {count.length == 0 ? "0" : count[0]?.commentsCount} comments
              </p>
            </div>
            <div className="rightSide">
              <div className="name-buttons">
                <p className="name" onClick={() => navigateUserPage()}>{name}</p>
                <div className="buttons-edit-delete">
                  <AiFillEdit
                    className="icon-button"
                    onClick={() => setOpenTextArea(!openTextArea)}
                  />
                  <AiFillDelete
                    className="icon-button"
                    onClick={() => openModal()}
                  />
                </div>
              </div>
              {openTextArea && (
                <form onSubmit={changeContent}>
                  <input
                    disabled={enableInput}
                    className="input-change-text"
                    value={contentChange}
                    ref={inputRef}
                    onChange={(e) => setContentChange(e.target.value)}
                  />
                </form>
              )}
              {!openTextArea && <p className="a">{content}</p>}
            </div>
          </div>
          <div className="linkEmbed">
            <LinkPreview
              metaTitle={metaTitle}
              metaDesc={metaDesc}
              metaImage={metaImage}
              link={link}
            />
          </div>
        </div>
        <Comments
          key={id}
          displayComments={enableComments}
          urlImage={userData.urlImage}
          postId={id}
          comments={comments}
          userId={userId}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-bottom: 34px;
  background-color: #1e1e1e;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  position: relative;

  .post {
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    background-color: #171717;
    color: #ffffff;
    width: 611px;
    font-family: "Lato", sans-serif;
    padding: 16px 24px 0 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
  }

  .headerPost {
    display: flex;
  }

  .profilePic {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    top: 0px;
    cursor: pointer;
  }

  .input-change-text {
    width: 503px;
    height: 44px;
    font-size: 16px;
    font-family: "Lato", sans-serif;
    border-radius: 10px;
    padding: 0;
  }

  .iconHeart {
    width: 30px;
    height: 30px;
    color: #ffffff;
    margin-top: 8px;
    cursor: pointer;
    position: absolute;
    top: 72px;
  }

  .iconFillHeart {
    width: 30px;
    height: 30px;
    color: #ffffff;
    margin-top: 8px;
    cursor: pointer;
    position: absolute;
    color: red;
    top: 72px;
  }

  .iconComment {
    width: 30px;
    height: 30px;
    color: #ffffff;
    margin-top: 8px;
    cursor: pointer;
    position: absolute;
    top: 140px;
  }

  .totalLikes {
    position: absolute;
    top: 114px;
    font-size: 12px;
  }
  .total-comments {
    position: absolute;
    top: 180px;
    font-size: 12px;
  }

  .leftSide {
    width: 15%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .rightSide {
    width: 85%;
    overflow-wrap: break-word;

    .name{
      cursor: pointer;
    }

    .name-buttons {
      display: flex;
      justify-content: space-between;
      height: 25px;

      .buttons-edit-delete {
        margin-right: 20px;
        width: 80px;
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        display: ${(props) =>
          props.showButtons && props.enableButtons ? "" : "none"};

        .icon-button {
          cursor: pointer;
        }
      }
    }
  }

  .linkEmbed {
    display: flex;
    justify-content: end;
  }

  iframe {
    width: 85%;
    height: 80%;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
