import styled from "styled-components";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUpPage() {
  return (
    <SignUpContainer>
      <div className="left-box-sign-up">
        <div className="content-left">
          <h1>linkr</h1>
          <h2>save, share and discover the best links on the web</h2>
        </div>
      </div>

      <div className="right-box-sign-up">
        <form>
          <input type="email" placeholder="e-mail" />
          <input type="password" placeholder="password" />
          <input type="text" placeholder="username" />
          <input type="text" placeholder="picture url" />
          <button className="button-sign-up">Sign Up</button>
        </form>
        <button>Switch back to log in</button>
      </div>
    </SignUpContainer>
  );
}

const SignUpContainer = styled.div`
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

    .content-left {
      width: 442px;
      h1 {
        font-size: 106px;
      }
      h2 {
        font-size: 43px;
      }
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

      input {
        width: 429px;
        height: 65px;
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
        width: 429px;
        height: 65px;
        margin-bottom: 10px;
        border-radius: 5px;
        border: none;
        font-size: 27px;
        font-family: "Passion One", cursive;
        text-decoration: none;
      }
    }

    button{
        background-color: #333333;
        font-size: 20px;
        color: #ffffff;
        text-decoration: underline;
        border: none;

        :hover{
            cursor: pointer;
        }
    }
  }
`;
