import styled from 'styled-components';

export default function LinkPreview(props) {
	const { link, metaTitle, metaDesc, metaImage } = props;
	return (
		<PreviewLink href={link} target="_blank">
			<div>
				<h1>{metaTitle}</h1>
				<h2>{metaDesc}</h2>
				<p>{link}</p>
			</div>
			<img className="image" src={metaImage} alt="Link image" />
		</PreviewLink>
	);
}

const PreviewLink = styled.a`
	width: 503px;
	min-height: 155px;
	margin-top: 8px;
	margin-bottom: 16px;
	font-family: 'Lato';
	text-decoration: none;

	border: 1px solid #4d4d4d;
	border-radius: 11px;

	display: flex;
	flex-direction: row;
	justify-content: space-between;

	.image {
		height: 155px;
		width: 155px;
		border-radius: 0px 11px 11px 0px;
	}

	div {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: space-between;
		padding: 24px 27px 24px 19px;
	}

	h1 {
		font-weight: 400;
		font-size: 16px;
		line-height: 19px;
		color: #cecece;
	}
	h2 {
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		color: #9b9595;
	}

	p {
		font-weight: 400;
		font-size: 11px;
		line-height: 13px;
		color: #cecece;
	}
`;
