import { SignUpContainer } from "./SignUp-page";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { URL_BASE } from "../constants/url";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enable, setEnable] = useState(false);
  const navigate = useNavigate();
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
          <input
            type="email"
            placeholder="e-mail"
            value={email}
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
