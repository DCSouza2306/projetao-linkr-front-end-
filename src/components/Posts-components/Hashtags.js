import ReactHashtag from "react-hashtag";
import styled from "styled-components";
import React from "react";


function Hashtags(props) {
  return (
    <ReactHashtag
      renderHashtag={function render(hashtagValue) {
        return (
          <StyledHashtag href={`/hashtag/${hashtagValue.substring(1)}`}>
            {hashtagValue}
          </StyledHashtag>
        );
      }}
    >
      {props.children}
    </ReactHashtag>
  );
}


export const Card = (props) => (
  <StyledContent>
    <Hashtags>{props.children}</Hashtags>
  </StyledContent>
);


const StyledHashtag = styled.a`
  color: #ffffff;
  font-weight: 700;
  font-size: 17px;
`;

const StyledContent = styled.p`
  color: #b7b7b7;
  font-size: 17px;
`;


