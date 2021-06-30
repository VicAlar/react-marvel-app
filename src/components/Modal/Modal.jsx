import React, { useRef } from "react";
import {
  Background,
  ModalImg,
  ModalContent,
  ModalWrapper,
  CloseModalIcon,
  NamePer,
  Lista,
  Description,
  ComicItem,
  FavIconFill,
  CardWrapper,
  ComicImg,
  ComicContent,
  ComicCharac,
  ComicTitle,
} from "./Modal.elements";

import { useDispatch, useSelector } from "react-redux";

import {
  addFavoriteAction,
  removeFavoriteAction,
  getComicAction
} from "../../actions/dataActions";

import { GlobalStyle } from "../../globalStyle";

import { useHistory } from 'react-router-dom'

const Modal = ({ showModal, setShowModal, comics }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();
  const history = useHistory();

  const perSelect = useSelector((state) => state.personajes.personajeSelect);
  const favorites = useSelector((state) => state.personajes.personajesFav);

  let storeChar = favorites.find((o) => o.id === perSelect.id);

  const changeColor = storeChar ? "#FFC700" : "#63500d";

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const comicRedirect = comic => {
    dispatch( getComicAction(comic))
    history.push(`/comic/${comic.id}`)
  }

  return (
    <>
      <GlobalStyle open={showModal ? "hidden" : "scroll"} />
      {showModal ? (
        <Background ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {storeChar ? (
              <FavIconFill
                fill={changeColor}
                stroke="#dfc0c0"
                onClick={() => dispatch(removeFavoriteAction(perSelect))}
              />
            ) : (
              <FavIconFill
                fill={changeColor}
                stroke="#000"
                onClick={() => dispatch(addFavoriteAction(perSelect))}
              />
            )}
            <ModalImg
              imgurl={`${perSelect.thumbnail.path.replace("http", "https")}.${
                perSelect.thumbnail.extension
              }`}
            />
            <ModalContent>
              <NamePer>{perSelect.name}</NamePer>
              <Description>
                {perSelect.description === ""
                  ? "No hay descripcion disponible para este personaje"
                  : perSelect.description}
              </Description>
              <h2>Lista de Comics</h2>
              <Lista>
                {comics.length === 0 ? (
                  <ComicItem key="1">No hay Comics disponibles</ComicItem>
                ) : (
                  comics[0].map((comic) => (
                    <ComicItem key={comic.id}>
                      <CardWrapper>
                        <ComicImg
                          onClick={() => comicRedirect(comic)}
                          comicUrl={`${comic.thumbnail.path.replace(
                            "http",
                            "https"
                          )}.${comic.thumbnail.extension}`}
                        />
                        <ComicContent>
                          <ComicCharac>{perSelect.name}</ComicCharac>
                          <ComicTitle>{comic.title}</ComicTitle>
                        </ComicContent>
                      </CardWrapper>
                    </ComicItem>
                  ))
                )}
              </Lista>
            </ModalContent>
            <CloseModalIcon
              aria-label="Close Modal"
              onClick={() => setShowModal((isOpen) => !isOpen)}
            />
          </ModalWrapper>
        </Background>
      ) : null}
    </>
  );
};

export default Modal;
