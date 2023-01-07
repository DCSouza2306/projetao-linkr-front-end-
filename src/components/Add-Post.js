import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { URL_BASE } from "../constants/url.js";
import { AuthContext } from "../context/auth-context.js";

export default function AddPost() {
  const [linkInput, setLinkInput] = useState("");
  const [contentInput, setContentInput] = useState("");
  const { userData, refreshTimeline, setRefreshTimeline } =
    React.useContext(AuthContext);
  const [isDisabled, setIsDisabled] = useState(false);

  function handlePublish(e) {
    e.preventDefault();
    setIsDisabled(true);

    if (linkInput.length === 0) {
      alert("Preencha o link!");
      setIsDisabled(false);
      return;
    }

    const body = {
      link: linkInput,
      content: contentInput,
    };
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };

    axios
      .post(`${URL_BASE}/posts`, body, config)
      .then((res) => {
        setContentInput("");
        setLinkInput("");
        setIsDisabled(false);
        setRefreshTimeline(!refreshTimeline);
      })
      .catch((err) => {
        console.log(err.response.data.message);
        alert("Houve um erro ao publicar seu link");
        setIsDisabled(false);
      });
  }

  return (
    <NewPostWrapper>
      <img src={userData?.urlImage} alt="user image" />

      <div>
        <h1>What are you going to share today?</h1>
        <PublishForm onSubmit={handlePublish}>
          <input
            className="urlInput"
            type="text"
            placeholder="http://..."
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            disabled={isDisabled}
          />
          <input
            className="textInput"
            type="text"
            placeholder="Awesome article about #javascript"
            value={contentInput}
            onChange={(e) => setContentInput(e.target.value)}
            disabled={isDisabled}
          />
          <button type="submit" disabled={isDisabled}>
            {!isDisabled ? "Publish" : "Publishing..."}
          </button>
        </PublishForm>
      </div>
    </NewPostWrapper>
  );
}

const NewPostWrapper = styled.div`
  background-color: #ffffff;
  width: 611px;
  height: 209px;
  border-radius: 16px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
  margin-bottom: 24px;
  padding: 16px 18px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-family: "Lato", sans-serif;
  font-weight: 300;

  img {
    width: 50px;
    height: 50px;
    border-radius: 26.5px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
    }
  }
`;

const PublishForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  font-family: "Lato", sans-serif;

  input {
    width: 503px;
    background-color: #efefef;
    border-radius: 5px;
    border: none;
    margin-bottom: 5px;
    font-weight: 300;
    font-size: 15px;
  }

  .urlInput {
    height: 30px;
  }
  .textInput {
    height: 66px;
  }

  button {
    width: 112px;
    height: 31px;
    border: none;
    border-radius: 5px;
    background-color: #1877f2;
    color: #ffffff;
    font-weight: 700;
    font-size: 14px;
  }
`;
