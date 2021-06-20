import React from "react";
import { CardContainer, CardImage, CardText } from "./Card.elements";

const Card = ({ imgurl, name, openModal }) => {

  return (
    <>
      <CardContainer>
        <CardImage imgurl={imgurl} onClick={openModal}>
          <CardText>{name}</CardText>
        </CardImage>
      </CardContainer>
    </>
  );
};

export default Card;
