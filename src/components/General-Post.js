import styled from 'styled-components';
import { AiOutlineHeart } from 'react-icons/ai';

export default function GeneralPost({ id, urlImage, name, content, link }) {
	return (
		<Container>
			<div className="post" key={id}>
				<div className="headerPost">
					<div className="leftSide">
						<img src={urlImage} />
						<AiOutlineHeart className="iconHeart" />
					</div>
					<div className="rightSide">
						<p className="name">{name}</p>
						<p className="a">{content}</p>
					</div>
				</div>
				<div className="linkEmbed">
					<iframe src={link} />
				</div>
			</div>
		</Container>
	);
}

const Container = styled.div`
	border-radius: 16px;
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;
	background-color: #171717;
	color: #ffffff;
	width: 611px;
	font-family: 'Lato', sans-serif;

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
