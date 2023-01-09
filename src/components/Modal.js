import styled from "styled-components";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import React, { useState } from "react";
import { AuthContext } from "../context/auth-context";
import LoadingMessage from "./LoadingMessage";

export default function Modal({ closeModal, idPost }) {
  const { userData, setRefreshTimeline, refreshTimeline } =
    React.useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const config = {
    headers: { Authorization: `Bearer ${userData.token}` },
  };

  function deletePost() {
    setIsLoading(true);
    axios
      .delete(`${URL_BASE}/posts/${idPost}`, config)
      .then(() => {
        closeModal(false);
        setRefreshTimeline(!refreshTimeline);
      })
      .catch((e) => {
        alert(e.response.data.message);
        closeModal(false);
        console.log(e.response.data.message);
      });
  }
  return (
    <ModalDiv>
      {isLoading && <LoadingMessage zIndex="10" />}
      <div className="container-modal">
        {!isLoading && (
          <>
            <h2>Are you sure you want do delete this post?</h2>
            <div className="buttons-modal">
              <button
                onClick={() => closeModal(false)}
                className="button-modal-return"
              >
                No, go back
              </button>
              <button
                className="button-modal-confirm"
                onClick={() => deletePost()}
              >
                Yes, delete it
              </button>
            </div>
          </>
        )}
      </div>
    </ModalDiv>
  );
}

const ModalDiv = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(255, 255, 255, 0.4);
  display: flex;
  justify-content: center;
  padding-top: 230px;

  .container-modal {
    h2 {
      font-family: "Lato";
      font-size: 34px;
      font-weight: bold;
      text-align: center;
      width: 350px;
      color: white;
      margin-bottom: 40px;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #333333;
    width: 597px;
    height: 262px;
    border-radius: 50px;
    position: fixed;

    .button-modal-return,
    .button-modal-confirm {
      width: 134px;
      height: 37px;
      font-family: "Lato";
      font-size: 18px;
      font-weight: bold;
      border: none;
      border-radius: 10px;

      :hover {
        cursor: pointer;
      }
    }

    .button-modal-return {
      background-color: white;
      color: #1877f2;
      margin-right: 30px;
    }

    .button-modal-confirm {
      background-color: #1877f2;
      color: white;
    }
  }
`;
