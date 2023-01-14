import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { SignUpContainer } from "./SignUp-page";
import { URL_BASE } from "../constants/url";
import { AuthContext } from "../context/auth-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const { setUserData } = React.useContext(AuthContext);
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token"));
  const inputRef = useRef();
  const Swal = require("sweetalert2");

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  if (token) {
    setUserData(token);
    navigate("/timeline");
  }

  function login(e) {
    e.preventDefault();

    if (email === "" || password === "") {
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

    const newLogin = {
      email: email,
      password: password,
    };

    axios
      .post(`${URL_BASE}/`, newLogin)
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data));
        navigate("/timeline");
      })
      .catch((e) => {
        if (e.response == undefined) {
          Swal.fire({
            width: "300px",
            title: "Error",
            text: "Connection Refused",
            icon: "error",
            button: "OK",
            closeOnEsc: true,
          });
          setEnable(false);
        }
        Swal.fire({
          width: "300px",
          title: "Error",
          text: e.response.data.message,
          icon: "error",
          button: "OK",
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
        <form onSubmit={login}>
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
          <button className="button-sign-up" type="submit" disabled={enable}>
            <p>Log In</p>
          </button>
        </form>
        <Link to="/sign-up">
          <button>First time? Create an account!</button>
        </Link>
      </div>
    </SignUpContainer>
  );
}
