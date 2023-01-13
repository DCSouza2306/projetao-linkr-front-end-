import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Comentaries({
  comment,
  urlImage,
  name,
  userId,
  idPostAuthor,
  idCommenter
}) {
  const postAuthor = userId == idPostAuthor;
  const navigate = useNavigate();

  function navigateUserPage() {
    navigate(`/user/${idCommenter}`);
  }
  return (
    <ComentariesDiv>
      <div>
        <img
          src={urlImage}
          alt="profile picture"
          className="img-comments"
          onClick={() => navigateUserPage()}
        />
      </div>
      <div className="comentaries-right">
        <div className="name-author">
          <p onClick={() => navigateUserPage()} className="comentaries-name">
            {name}
          </p>
          <div className="name-dot">
            {postAuthor ? <div className="dot"></div> : ""}
            <p>{postAuthor ? "post's author" : ""}</p>
          </div>
        </div>
        <p className="comentaries-content">{comment}</p>
      </div>
    </ComentariesDiv>
  );
}

const ComentariesDiv = styled.div`
  height: 80px;
  width: 95%;
  border-bottom: 1px solid #353535;
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  align-items: center;
  font-family: "Lato";

  .comentaries-right {
    margin-left: 15px;
  }

  .img-comments {
    width: 39px;
    height: 39px;
    border-radius: 100%;
    cursor: pointer;
  }

  .comentaries-name {
    font-size: 14px;
    color: white;
    font-weight: 700;
    cursor: pointer;
  }

  .comentaries-content {
    color: #acacac;
    font-size: 14px;
  }

  .dot {
    width: 8px;
    height: 8px;
    border-radius: 100%;
    background-color: #565656;
  }

  .name-author {
    display: flex;
    width: 150px;
    justify-content: space-between;
    font-size: 14px;
    align-items: center;
    margin-bottom: 5px;
  }

  .name-dot {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 95px;
    color: #565656;
  }
`;
