import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { URL_BASE } from "../constants/url";
import { useNavigate } from "react-router-dom";
import { GoSearch } from "react-icons/go";
export default function SearchBar({ setPosts }) {
  const [inputSearch, setInputSearch] = useState("");
  const [filterSearch, setFilterSearch] = useState([]);
  const [visible, setVisible] = useState("hidden");
  const navigate = useNavigate();

  async function handleFilter(event) {

    setInputSearch(event.target.value);

    if (inputSearch.length > 1) {
      const promise = await axios.get(`${URL_BASE}/user?name=${inputSearch}`);

      if (promise.data === "User not found") {
        setFilterSearch([]);
        return;
      }
      setFilterSearch(promise.data);
      setVisible("");
    }
  }

  useEffect(() => {
    if (inputSearch.length < 3) {
      setFilterSearch([]);
      setVisible("hidden");
    }
  }, [inputSearch]);

  return (
    <ContainerSearch>
      <Search>
        <input
          id="input"
          type="text"
          placeholder="Search for people"
          value={inputSearch}
          onChange={handleFilter}
        />
        <GoSearch />
      </Search>

      <ListPeople id={visible}>
        {filterSearch !== 0 && (
          <div className="dataResult">
            {filterSearch.map((user) => (
              <div
                className="profile"
                key={user.id}
                onClick={() => {
                  setVisible("hidden");
                  setFilterSearch([]);
                  setInputSearch("");
                  navigate(`/user/${user.id}`);
                }}
              >
                <img src={user.url_img} alt={user.name} />

                <p>{user.name}</p>
              </div>
            ))}
          </div>
        )}
      </ListPeople>
    </ContainerSearch>
  );
}

const ContainerSearch = styled.div`
  width: 563px;
  height: 131px;
  display: flex;
  flex-direction: column;
  top: 40px;
  #hidden {
    display: none;
  }
`;
const Search = styled.div`
  width: 563px;
  height: 45px;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-radius: 8px;
  padding: 17px;
  border-radius: 8px;
  color: #c6c6c6;
  #input::placeholder {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #c6c6c6;
  }
  input {
    width: 563px;
    height: 45px;
    border: 0;
    outline: 0;
    background: none;
  }
`;

const ListPeople = styled.div`
  width: 563px;
  height: 131px;
  background-color: #e7e7e7;
  border-radius: 8px;
  box-sizing: border-box;
  overflow: hidden;
  overflow-y: auto;
  display: flex;
  z-index: 20;

  .dataResult {
    width: 131px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  .dataResult::-webkit-scrollbar {
    display: none;
  }

  img {
    width: 39px;
    height: 39px;
    border-radius: 304px;
    margin-left: 15px;
  }

  .profile {
    display: flex;
    margin-left: 17px;
    align-items: center;
  }
  .profile p {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
  }
`;
