import axios from "axios";
import Modal from "../components/Modal";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import AddPost from "../components/Add-Post";
import GeneralPost from "../components/General-Post";
import Header from "../components/Header";
import LoadingMessage from "../components/LoadingMessage";
import NoPostsMessage from "../components/NoPostsMessage";
import { URL_BASE } from "../constants/url";
import { AuthContext } from "../context/auth-context";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function TimelinePage(params) {

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [idPost, setIdPost] = useState("")
	const [posts, setPosts] = useState([]);
	const { refreshTimeline, userData } = React.useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);
  
	function closeModal() {
	  setModalIsOpen(false);
	}
  
	useEffect(() => {
	  axios
		.get(`${URL_BASE}/posts`)
		.then((res) => {
		  setPosts(res.data);
		  setIsLoading(false);
		})
		.catch((err) => {
		  console.log(err.data);
		  alert(
			"An error occured while trying to fetch the posts, please refresh the page"
		  );
		});
	}, [refreshTimeline]);
  
	return (
	  <>
		<Header />
  
		<Wrapper>
		  {modalIsOpen ? <Modal
			isOpen={modalIsOpen}
			onRequestClose={closeModal}
			closeModal={setModalIsOpen}
			idPost={idPost}
			style={customStyles}
			contentLabel="Example Modal"
			overlayClassName="modal-overlay"
			className="modal-content"
			/>: null}
  
  
  
		  <AddPost />
		  {isLoading && <LoadingMessage />}
		  {posts.length === 0 && isLoading === false ? (
			<NoPostsMessage />
		  ) : (
			posts.map((p) =>  
			  <GeneralPost
				id={p.id}
				urlImage={p.urlImage}
				name={p.name}
				content={p.content}
				link={p.link}
				setModalIsOpen={setModalIsOpen}
				setIdPost={setIdPost}
			  />
			)
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
