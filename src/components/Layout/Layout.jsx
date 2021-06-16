import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import styled from "styled-components";
import Modal from "../Modal/Modal";

//Redux

import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersAction,
  getCharacterIdAction,
} from "../../actions/dataActions";

const Grid = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  padding: 3.5rem 3rem;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    display: block;
    margin-left: 40px;
  }

  @media (max-width: 420px) {
    margin-left: 20px;
  }

  @media (max-width: 380px) {
    margin: 0;
  }
`;

const Layout = () => {
  //State para el modal
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    //Primera consulta a la API
    const loadCharacters = () => dispatch(getCharactersAction());
    loadCharacters();
    //eslint-disable-next-line
  }, []);

  const characters = useSelector((state) => state.personajes.personajes);
  const filterChar = useSelector((state) => state.personajes.personajesFilt);
  const comics = useSelector((state) => state.personajes.comics);
  const perSelect = useSelector((state) => state.personajes.personajeSelect);

  //Funcion que abre el modal
  const openModal = (e, id) => {
    setShowModal((isOpen) => !isOpen);
  };

  const selectPer = (id) => {
    dispatch(getCharacterIdAction(id));
  };

  return (
    <div>
      <Modal 
        showModal={showModal} 
        setShowModal={setShowModal}
        comics={comics}
        perSelect={perSelect}
      />
      <Grid>
        {characters.length === 0
          ? null
          : characters[0].map((personaje) => (
              <div onClick={() => selectPer(personaje)} key={personaje.id}>
                <Card
                  imgurl={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                  name={personaje.name}
                  openModal={openModal}
                />
              </div>
            ))}

        {filterChar.length > 0
          ? filterChar[0].map((per) => (
              <div onClick={() => selectPer(per)} key={per.id}>
                <Card
                  imgurl={`${per.thumbnail.path}.${per.thumbnail.extension}`}
                  name={per.name}
                  openModal={openModal}
                />
              </div>
            ))
          : null}
      </Grid>
    </div>
  );
};

export default Layout;
