import styled from "styled-components";

export default function Modal({ closeModal }) {
  return (
    <ModalDiv>
 
        <h2>Are you sure you want do delete this post</h2>
        <div className="buttons-modal">
        <button onClick={() => closeModal(false)}>No, go back</button>
        <button>Yes, delete it</button>
        </div>
 
    </ModalDiv>
  );
}

const ModalDiv = styled.div`
  border: 1px solid black;
  width: 397px;
  height: 162px;
  border-radius: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
