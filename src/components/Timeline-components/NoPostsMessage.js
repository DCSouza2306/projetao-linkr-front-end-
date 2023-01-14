import styled from 'styled-components';

export default function NoPostsMessage() {
	return (
		<MessageStyle>
			<h1>There are no posts yet</h1>
		</MessageStyle>
	);
}

const MessageStyle = styled.div`
	width: 300px;
	height: 100px;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: 25px;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 25px;
`;
