import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillDelete,
  AiFillEdit,
  AiFillHeart,
} from "react-icons/ai";
import React, { useState, useEffect } from "react";

export default function GeneralPost({
  id,
  urlImage,
  name,
  content,
  link,
  setModalIsOpen,
  setIdPost,
}) {
  const [isLiked, setIsLiked] = useState(false);

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

  return (
    <Container>
      <div className="post" key={id}>
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
                <AiFillEdit className="icon-button" />
                <AiFillDelete
                  className="icon-button"
                  onClick={() => openModal()}
                />
              </div>
            </div>
            <p className="a">{content}</p>
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

  .headerPost {
    display: flex;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    position: absolute;
    top: 16px;
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
    margin-top: 16px;
    margin-left: 8px;
    overflow-wrap: break-word;

    .name-buttons {
      display: flex;
      justify-content: space-between;

      .buttons-edit-delete {
        margin-right: 20px;
        width: 80px;
        display: flex;
        justify-content: space-around;
        font-size: 20px;

        .icon-button:hover {
          cursor: pointer;
        }
      }
    }

    .a {
      margin-top: 8px;
    }
  }

  .linkEmbed {
    display: flex;
    justify-content: center;
  }

  iframe {
    width: 90%;
    height: 80%;
    margin-top: 8px;
    margin-bottom: 16px;
  }
`;
