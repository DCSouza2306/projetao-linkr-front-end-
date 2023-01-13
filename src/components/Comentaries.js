import styled from "styled-components";

export default function Comentaries({ comment, urlImage, name }) {
  return (
    <ComentariesDiv>
      <div>
        <img src={urlImage} alt="profile picture" className="img-comments" />
      </div>
      <div className="comentaries-right">
        <p className="comentaries-name">{name}</p>
        <p className="comentaries-content">{comment}</p>
      </div>
    </ComentariesDiv>
  );
}

const ComentariesDiv = styled.div`
  height: 80px;
  width: 95%;
  border-bottom: 1px solid #353535;
  margin: 0 auto;
  padding: 16px 0;
  display: flex;
  align-items: center;
  font-family: "Lato";

  .comentaries-right{
    margin-left: 15px;
  }

  .img-comments {
    width: 39px;
    height: 39px;
    border-radius: 100%;
  }

  .comentaries-name{
    font-size: 14px;
    color: white;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .comentaries-content{
    color: #ACACAC;
    font-size: 14px;
  }
`;
