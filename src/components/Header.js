import styled from "styled-components";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/auth-context";
import React from "react";
import SearchBar from "./Search-Bar";


export default function Header() {
  const [showLoggoutBox, setShowLoggoutBox] = useState(false);
  const { userData } = React.useContext(AuthContext);
  const navigate = useNavigate();

  function toggleLogout() {
    document.onclick = () => {
      setShowLoggoutBox(!showLoggoutBox);
    };
  }

  if (showLoggoutBox) {
    document.onclick = () => {
      setShowLoggoutBox(false);
    };
  }

  function logout() {
    localStorage.clear();
    navigate("/");
  }

  return (
    <Container showLoggoutBox={showLoggoutBox}>
      <Link to="/">
        <a>linkr</a>
      </Link>
      <SearchBar />
      <div>
        <IoIosArrowUp
          display={showLoggoutBox ? "" : "none"}
          className="arrowIcon"
          onClick={() => toggleLogout()}
        />
        <IoIosArrowDown
          display={showLoggoutBox ? "none" : ""}
          className="arrowIcon"
          onClick={() => toggleLogout()}
        />
        <img
          onClick={() => toggleLogout()}
          src={userData?.urlImage}
          alt="User Icon"
        />
        <div className="logoutBox" onClick={logout}>
          Logout
        </div>
      </div>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #151515;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;

  div {
    display: flex;
    align-items: center;
    position: relative;
  }

  .logoutBox {
    width: 140px;
    height: 72px;
    background-color: #171717;
    position: absolute;
    top: 62px;
    right: 0px;
    font-size: 17px;
    font-weight: bold;
    color: #ffffff;
    display: ${(props) => (props.showLoggoutBox === false ? "none" : "flex")};
    align-items: center;
    justify-content: center;
    border-radius: 0 0 0 20px;

    :hover {
      cursor: pointer;
    }
  }

  .arrowIcon {
    height: 30px;
    width: 30px;
    color: #ffffff;
    margin-top: 16px;
    margin-right: 8px;
    cursor: pointer;
  }

  a {
    font-size: 49px;
    font-weight: bold;
    color: #ffffff;
    margin-left: 32px;
    text-decoration: none;
    cursor: pointer;
  }

  img {
    width: 53px;
    height: 53px;
    border-radius: 30000px;
    margin-right: 32px;
    object-fit: fill;

    :hover {
      cursor: pointer;
    }
  }
`;
