import React from "react";
import { CardContainer, CardImage, CardText, FavIcon } from "./Card.elements";

const Card = ({ imgurl, name, fav, openModal }) => {

  return (
    <>
      <CardContainer>
        <CardImage imgurl={imgurl} onClick={openModal}>
          <CardText>{name}</CardText>
          <FavIcon />
        </CardImage>
      </CardContainer>
    </>
  );
};

export default Card;
