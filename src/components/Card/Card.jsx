import React from "react";
import {
  CardContainer,
  CardImage,
  CardText,
  FavIcon,
  FavIconFill,
} from "./Card.elements";

import { useSelector, useDispatch } from "react-redux";

import {
  addFavoriteAction,
  removeFavoriteAction,
} from "../../actions/dataActions";

const Card = ({ per, openModal, selectPer }) => {
  const favorites = useSelector((state) => state.personajes.personajesFav);

  let storeChar = favorites.find((o) => o.id === per.id);
  const dispatch = useDispatch();

  


  return (
    <>
      <CardContainer>
        {storeChar ? (
          <FavIconFill onClick={() => {selectPer(per); dispatch(removeFavoriteAction(per))}} fill="#FFC700" />
        ) : (
          <FavIcon onClick={() => {selectPer(per); dispatch(addFavoriteAction(per))}} />
        )}
        <CardImage
          imgurl={`${per.thumbnail.path.replace("http", "https")}.${
            per.thumbnail.extension
          }`}
          onClick={() => {selectPer(per); openModal()}}
        >
          <CardText>{per.name}</CardText>
        </CardImage >
      </CardContainer>
    </>
  );
};

export default Card;
