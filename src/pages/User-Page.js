import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { URL_BASE } from "../constants/url";
import axios from "axios";
import Header from "../components/Header";
import Swal from "sweetalert2";
import { AuthContext } from "../context/auth-context";
import { isLiked, lika, request } from "../requests/requests.js";
import { AiOutlineHeart } from "react-icons/ai";
import Modal from "../components/Modal";
import GeneralPost from "../components/General-Post";
import NoPostsMessage from "../components/NoPostsMessage";
import LoadingMessage from "../components/LoadingMessage";

export default function UserPage() {
  const { id } = useParams();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [idPost, setIdPost] = useState("");
  const [posts, setPosts] = useState([]);
  const [commentsCount, setCommentsCount] = useState([]);
  const [postsComments, setPostsComments] = useState([]);
  const { refreshTimeline, setUserData, userData } =
    React.useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const token = JSON.parse(localStorage.getItem("token"));
  const [likes, setLikes] = useState();
  const [listIsLiked, setListIsLiked] = useState();
  const config = {
    headers: { Authorization: `Bearer ${userData.token}` },
  };
  let userId = userData.userId;

  function closeModal() {
    setModalIsOpen(false);
  }

  useEffect(() => {
    setUserData(token);
    axios
      .get(`${URL_BASE}/user/${id}`)
      .then((res) => {
        setPosts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.data);
        Swal.fire({
          width: "300px",
          title: "Error",
          text: "An error occured while trying to fetch the posts, please refresh the page",
          icon: "error",
          button: "OK",
        });
      });

    axios
      .get(`${URL_BASE}/posts/comments`, config)
      .then((res) => {
        setPostsComments(res.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });

    axios
      .get(`${URL_BASE}/comments`)
      .then((res) => {
        setCommentsCount(res.data);
      })
      .catch((e) => {
        console.log(e.response.data);
      });

    const requestLikes = async () => {
      const data = await request({ config });
      setLikes(data?.likesPost);
      setListIsLiked(data?.isLiked);
    };

    requestLikes();
  }, [id]);

  return (
    <>
      <Header />

      <Wrapper>
        {modalIsOpen ? (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            closeModal={setModalIsOpen}
            idPost={idPost}
            contentLabel="Example Modal"
            overlayClassName="modal-overlay"
            className="modal-content"
          />
        ) : null}
       
        {isLoading && <LoadingMessage />}
        {posts.length === 0 && isLoading === false ? (
          <NoPostsMessage />
        ) : (<>
         <User>
          <div className="profile">
            <img src={posts[0]?.urlImage} />
            <h1>{posts[0]?.name} posts</h1>
          </div>
        </User>
          {posts.map((p, i) => (
            <GeneralPost
              key={i}
              id={p.id}
              userId={p.userId}
              urlImage={p.urlImage}
              name={p.name}
              content={p.content}
              link={p.link}
              metaTitle={p.metaTitle}
              metaDesc={p.metaDesc}
              metaImage={p.metaImage}
              postsComments={postsComments}
              setModalIsOpen={setModalIsOpen}
              commentsCount={commentsCount}
              setIdPost={setIdPost}
              like={lika({ likes, p })}
              isLiked={isLiked({ listIsLiked, p, userId })}
            />
          ))}
        </>
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
