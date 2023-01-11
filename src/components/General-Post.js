import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillDelete,
  AiFillEdit,
  AiFillHeart,
} from "react-icons/ai";
import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { AuthContext } from "../context/auth-context";
import Swal from "sweetalert2";

export default function GeneralPost({
  id,
  urlImage,
  userId,
  name,
  content,
  link,
  setModalIsOpen,
  setIdPost,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [openTextArea, setOpenTextArea] = useState(false);
  const [contentChange, setContentChange] = useState(content);
  const [enableInput, setEnableInput] = useState(false);
  const [enableButtons, setEnableButtons] = useState(false)
  const { userData, setRefreshTimeline, refreshTimeline } =
    React.useContext(AuthContext);
  const inputRef = useRef();
  const config = {
    headers: { Authorization: `Bearer ${userData?.token}` },
  };

  useEffect(() => {
    if (openTextArea) {
      inputRef.current.focus();
    }
    setContentChange(content);
  }, [openTextArea]);

  function likePost() {
    if (isLiked === false) {
      //Envia para a tabela likes o id do usuario e o id do post
    } else {
      //Exclui da tabela likes
    }
    setIsLiked(!isLiked);
  }

  function openModal() {
    setModalIsOpen(true);
    setIdPost(id);
  }


  function changeContent(e) {
    e.preventDefault();
    setEnableInput(true)
    setOpenTextArea(true);
    const textChange = {
      content: contentChange,
    };
    axios
      .patch(`${URL_BASE}/posts/${id}`, textChange, config)
      .then(() => {
        setEnableInput(false)
        setOpenTextArea(false)
        setRefreshTimeline(!refreshTimeline);
      })
      .catch((e) => {
        setEnableInput(false)
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

  function passouMouse(){
    setEnableButtons(true)
  }

  function tirouMouse(){
    setEnableButtons(false)
  }

  return (
    <Container showButtons={userId == userData?.userId} enableButtons={enableButtons}>
      <div className="post" key={id} onMouseEnter={passouMouse} onMouseLeave={tirouMouse} >
        <div className="headerPost">
          <div className="leftSide">
            <img src={urlImage} alt="profile picture" />
            {isLiked ? (
              <AiFillHeart
                className="iconFillHeart"
                onClick={() => likePost()}
              />
            ) : (
              <AiOutlineHeart
                className="iconHeart"
                onClick={() => likePost()}
              />
            )}
          </div>
          <div className="rightSide">
            <div className="name-buttons">
              <p className="name">{name}</p>
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
          <iframe src={link} />
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  background-color: #171717;
  color: #ffffff;
  width: 611px;
  font-family: "Lato", sans-serif;
  padding: 16px 24px 16px 0;

  .headerPost {
    display: flex;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    top: 0px;
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
    top: 56px;
  }

  .iconFillHeart {
    width: 30px;
    height: 30px;
    color: #ffffff;
    margin-top: 8px;
    cursor: pointer;
    position: absolute;
    top: 56px;
    color: red;
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
        display: ${props => props.showButtons && props.enableButtons ? "": "none"};

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
