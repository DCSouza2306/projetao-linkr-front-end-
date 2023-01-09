import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../constants/url";
import axios from "axios";
import HeaderSearch from "../components/Header-Search";

import { AiOutlineHeart } from "react-icons/ai";

export default function UserPage() {
  const { id } = useParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const promise = axios
      .get(`${URL_BASE}/user/${id}`)
      .then((res) => {
        console.log(res.data);
        setPosts(res.data);
      })
      .catch((res) => {});
  }, [id]);

  return (
    <>
      <HeaderSearch setPosts={setPosts} />

      <Wrapper>
        {posts.length === 1 ? (
          <User>
            <div className="profile">
              <img src={posts[0].url_image} />
              <h1>{posts[0].name} posts</h1>
            </div>
          </User>
        ) : (
          posts.map((p) => (
            <Container>
              <div className="post">
                <div className="headerPost">
                  <div className="leftSide">
                    <img src={p.url_image} />
                    <AiOutlineHeart className="iconHeart" />
                  </div>
                  <div className="rightSide">
                    <p className="name">{p.name}</p>
                    <p className="a">{p.content}</p>
                  </div>
                </div>
                <div className="linkEmbed">
                  <iframe src={p.link} />
                </div>
              </div>
            </Container>
          ))
        )}
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  background-color: #333333;
  padding-top: 100px;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
const User = styled.div`
  .profile {
    display: flex;
    gap: 18px;
    align-items: center;
  }
  .profile h1 {
    color: #ffffff;
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 26px;
  }
`;
const Container = styled.div`
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
  background-color: #171717;
  color: #ffffff;

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
