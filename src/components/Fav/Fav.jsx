import React, { useState } from "react";
import styled from "styled-components";
import Card from "../Card/Card";
import Modal from "../Modal/Modal";
import { Grid, Msg } from "../Layout/Layout.elements";

//Redux
import { getCharacterIdAction } from "../../actions/dataActions";
import { useSelector, useDispatch } from "react-redux";

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
`;

const Fav = () => {
  //State para el modal
  const [showModal, setShowModal] = useState(false);

  //State del reducer
  const favorites = useSelector((state) => state.personajes.personajesFav);
  const comics = useSelector((state) => state.personajes.comics);
  const perSelect = useSelector((state) => state.personajes.personajeSelect);

  const dispatch = useDispatch();

  const openModal = () => {
    setShowModal((isOpen) => !isOpen);
  };

  const selectPer = (id) => {
    dispatch(getCharacterIdAction(id));
  };

  return (
    <>
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        comics={comics}
        perSelect={perSelect}
      />
      <Title>Personajes Favoritos</Title>

      {favorites.length === 0 ? (
        <Msg>No has selecionado ningun personaje como favorito</Msg>
      ) : (
        <Grid>
          {favorites.map((fav) => (
          <div onClick={() => selectPer(fav)} key={fav.id}>
            <Card
              key={fav.id}
              imgurl={`${fav.thumbnail.path}.${fav.thumbnail.extension}`}
              name={fav.name}
              openModal={openModal}
            />
          </div>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Fav;
