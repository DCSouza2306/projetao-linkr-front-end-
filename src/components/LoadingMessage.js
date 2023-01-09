import styled from 'styled-components';
import { TailSpin } from 'react-loader-spinner';

export default function LoadingMessage() {
	return (
		<LoadingMessageWrapper>
			<TailSpin
				height="80"
				width="80"
				color="#ffffff"
				ariaLabel="tail-spin-loading"
				radius="1"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
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
`;
