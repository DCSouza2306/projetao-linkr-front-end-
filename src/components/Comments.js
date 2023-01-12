import styled from "styled-components";
import { FiSend } from "react-icons/fi";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import React, { useState, useEffect } from "react";
import { AuthContext } from "../context/auth-context";

export default function Comments({
  displayComments,
  urlImage,
  inputRef,
  postId,
  openComments,
  postsComments,
}) {
  const [comment, setComment] = useState("");
  const { userData, refreshTimeline, setRefreshTimeline } =
    React.useContext(AuthContext);
  const config = {
    headers: { Authorization: `Bearer ${userData?.token}` },
  };

  function sendComment(e) {
    e.preventDefault();
    const textComment = {
      comment,
    };
    axios
      .post(`${URL_BASE}/posts/${postId}/comments`, textComment, config)
      .then(() => {
        openComments(false);
        setComment("");
        setRefreshTimeline(!refreshTimeline);
      })
      .catch((e) => {
        alert(e.response.data.message);
      });
  }
  return (
    <ContainerComment displayComments={displayComments}>
        <div className="comments">
        {
        postsComments?.map((post) => <p>testeeee</p>)}
        </div>
   

      <div className="write-comment">
        <img src={urlImage} alt="profile picture" className="img-comments" />
        <form className="forms-comment" onSubmit={sendComment}>
          <input
            ref={inputRef}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="input-comment"
            placeholder="write a comment..."
          />
          <button type="submit" className="button-send-comment"></button>
        </form>
        <FiSend className="send-icon" onClick={sendComment} />
      </div>
    </ContainerComment>
  );
}

const ContainerComment = styled.div`
  width: 611px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  display: ${(props) => (props.displayComments ? "" : "none")};

  .comments {
    height: 80px;
    width: 100%;
    background-color: purple;
  }

  .write-comment {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: relative;

    .send-icon {
      color: #ffffff;
      font-size: 16px;
      position: absolute;
      right: 32px;
      top: 32px;
      cursor: pointer;
    }

    .img-comments {
      width: 39px;
      height: 39px;
    }

    .input-comment {
      width: 510px;
      height: 39px;
      border-radius: 8px;
      background-color: #252525;
      border: none;
      font-family: "Lato";
      font-weight: bold;
      font-style: italic;
      font-size: 14px;
      color: #ffffff;
      padding-left: 10px;
      padding-right: 40px;

      ::placeholder {
        color: #575757;
      }
    }

    .button-send-comment {
      display: none;
    }
  }
`;
