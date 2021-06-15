import React, { useEffect } from "react";
import Card from "../Card/Card";
import styled from "styled-components";

//Redux

import { useDispatch, useSelector } from "react-redux";
import { getCharactersAction } from "../../actions/dataActions";

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
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
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
  const dispatch = useDispatch();

  useEffect(() => {
    //Primera consulta a la API
    const loadCharacters = () => dispatch(getCharactersAction());
    loadCharacters();
    //eslint-disable-next-line
  }, []);

  const characters = useSelector((state) => state.personajes.personajes )

  return (
    <div>
      <Grid>
        {characters.length === 0 ? (
            <div>No hay Personajes</div>
        ) : (
            characters[0].map( personaje => (
                <Card 
                    key={personaje.id}
                    imgurl={`${personaje.thumbnail.path}.${personaje.thumbnail.extension}`}
                    name={personaje.name}
                />
            ))
        )}
      </Grid>
    </div>
  );
}

export default Layout;
