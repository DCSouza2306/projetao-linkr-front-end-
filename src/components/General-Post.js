import styled from 'styled-components';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { useState } from 'react';


export default async function GeneralPost({ id, urlImage, name, content, link }) {
    const [isLiked, setIsLiked] = useState(false)

    function likePost(){
        if(isLiked === false){
            //Envia para a tabela likes o id do usuario e o id do post
        } else{
            //Exclui da tabela likes 
        }
        setIsLiked(!isLiked)
    }

    return (
        <Container>
            <div className="post" key={id}>
                <div className="headerPost">
                    <div className="leftSide">
                        <img src={urlImage} alt="profile picture" />
                        {isLiked ? <AiFillHeart className="iconFillHeart" onClick={() => likePost()}/> : <AiOutlineHeart className="iconHeart" onClick={() => likePost()}/>}
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
    padding: 16px 24px 16px 0;

	.headerPost {
		display: flex;
	}

	img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
		position: absolute;
		top: 0;

	}

	.iconHeart {
		width: 30px;
		height: 30px;
		color: #ffffff;
		margin-top: 8px;
		cursor: pointer;
		position: absolute;
		top: 56px;  
	}

    .iconFillHeart{
		width: 30px;
		height: 30px;
		color: #ffffff;
		margin-top: 8px;
		cursor: pointer;
		position: absolute;
		top: 56px;  
        color: red;
    }

	.leftSide {
        background-color: aliceblue;
		width: 15%;
        height: 10px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		position: relative;
	}

	.rightSide {
		width: 85%;
		overflow-wrap: break-word;

		.a {
			margin-top: 8px;
		}
	}

	.linkEmbed {
		display: flex;
		justify-content: end;
	}

	iframe {
		width: 85%;
		height: 80%;
		margin-top: 8px;
		margin-bottom: 16px;
	}
`;
