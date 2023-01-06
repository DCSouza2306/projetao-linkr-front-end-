import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import AddPost from '../components/Add-Post';
import GeneralPost from '../components/General-Post';
import Header from '../components/Header';
import LoadingMessage from '../components/LoadingMessage';
import NoPostsMessage from '../components/NoPostsMessage';
import { URL_BASE } from '../constants/url';
import { AuthContext } from '../context/auth-context';

export default function TimelinePage(params) {
	const [posts, setPosts] = useState([]);
	const { refreshTimeline } = React.useContext(AuthContext);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		axios
			.get(`${URL_BASE}/posts`)
			.then((res) => {
				console.log(res.data);
				setPosts(res.data);
				setIsLoading(false);
			})
			.catch((err) => {
				console.log(err.data);
				alert(
					'An error occured while trying to fetch the posts, please refresh the page'
				);
			});
	}, [refreshTimeline]);

	return (
		<>
			<Header />

			<Wrapper>
				<AddPost />
				{isLoading && <LoadingMessage />}
				{posts.length === 0 && isLoading === false ? (
					<NoPostsMessage />
				) : (
					posts.map(GeneralPost)
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
`;
