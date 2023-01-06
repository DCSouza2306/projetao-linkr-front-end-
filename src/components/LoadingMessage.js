import styled from 'styled-components';
import { Ring } from 'react-awesome-spinners';

export default function LoadingMessage({zIndex}) {
	return (
		<LoadingMessageWrapper zIndex={zIndex}>
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
	margin-top: 25px;
	z-index: ${props => props.zIndex == "10" ? "10" : "none"};
	position: ${props => props.zIndex == "10"? "fixed": "static"}
`;
