import styled from 'styled-components';
import { Ring } from 'react-awesome-spinners';

export default function LoadingMessage() {
	return (
		<LoadingMessageWrapper>
			<Ring color={'#ffffff'} />
			<h1>Loading</h1>
		</LoadingMessageWrapper>
	);
}

const LoadingMessageWrapper = styled.div`
	width: 100px;
	height: 100px;
	font-family: 'Lato', sans-serif;
	font-weight: 700;
	font-size: 25px;
	color: #ffffff;
	display: flex;
	flex-direction: column;
	align-items: center;
`;
