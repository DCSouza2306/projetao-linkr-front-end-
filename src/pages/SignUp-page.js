import styled from "styled-components";
import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import Swal from "sweetalert2";

export default function SignUpPage() {
  const [name, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [urlPicture, setUrlPicture] = useState("");
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef()

  useEffect(() =>{
	inputRef.current.focus();
  },[])

  function signUp(e) {
    e.preventDefault();
    if (name === "" || email === "" || password === "" || urlPicture === "") {
      Swal.fire({
        width: "300px",
        title: "Atention",
        text: "All fields must be filled in",
        icon: "info",
        button: "OK",
        closeOnEsc: true,
      });
      return;
    }

    setEnable(true);

    const newUser = {
      email,
      password,
      name,
      urlPicture,
    };

    axios
      .post(`${URL_BASE}/sign-up`, newUser)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        Swal.fire({
          width: "300px",
          title: "Error",
          text: err.response.data.message,
          icon: "error",
          button: "OK",
          closeOnEsc: true,
        });
        setEnable(false);
      });
  }
  return (
    <SignUpContainer>
      <div className="left-box-sign-up">
        <div className="content-left">
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </div>

      <div className="right-box-sign-up">
        <form onSubmit={signUp}>
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            ref={inputRef}
            onChange={(e) => setEmail(e.target.value)}
            disabled={enable}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            disabled={enable}
          />
          <input
            type="text"
            placeholder="username"
            value={name}
            onChange={(e) => setUserName(e.target.value)}
            disabled={enable}
          />
          <input
            type="text"
            placeholder="picture url"
            value={urlPicture}
            onChange={(e) => setUrlPicture(e.target.value)}
            disabled={enable}
          />
          <button className="button-sign-up" type="submit" disabled={enable}>
            <p>Sign Up</p>
          </button>
        </form>
        <Link to="/">
          <button>Switch back to log in</button>
        </Link>
      </div>
    </SignUpContainer>
  );
}

export const SignUpContainer = styled.div`
  width: 100vw;
  height: 100vh;
  font-family: "Passion One", cursive;
  display: flex;

  .left-box-sign-up {
    background-color: #151515;
    height: 100vh;
    width: 60vw;
    color: #ffffff;
    padding-top: 180px;
    display: flex;
    justify-content: center;
  }
  .content-left {
    width: 442px;
    h1 {
      font-size: 106px;
    }
    h2 {
      font-size: 43px;
    }
  }

  .right-box-sign-up {
    background-color: #333333;
    width: 40vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    input {
      min-width: 429px;
      min-height: 65px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
      font-size: 27px;
      font-family: "Passion One", cursive;
      color: #9f9f9f;
    }

    .button-sign-up {
      background-color: #1877f2;
      color: #ffffff;
      min-width: 429px;
      min-height: 65px;
      margin-bottom: 10px;
      border-radius: 5px;
      border: none;
      font-size: 27px;
      font-family: "Passion One", cursive;
      text-decoration: none;
    }

    button {
      background-color: #333333;
      font-size: 20px;
      color: #ffffff;
      text-decoration: underline;
      border: none;
      cursor: pointer;
    }
  }

  @media screen and (max-width: 935px) {
    display: initial;
    width: 100%;
    height: 100%;

    .left-box-sign-up {
      width: 100%;
      height: 175px;
      padding-top: 10px;

      .content-left {
        max-width: 237px;
        h1 {
          font-size: 76px;
          text-align: center;
        }
        h2 {
          font-size: 23px;
          text-align: center;
          line-height: 30px;
        }
      }
    }

    .right-box-sign-up {
      width: 100%;
      height: calc(100vh - 175px);
      justify-content: initial;

      form{
        margin-top: 50px;
      }

      input, .button-sign-up {
        min-width: 330px;
        min-height: 55px;
      }
    }
  }


`;
