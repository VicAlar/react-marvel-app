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
  ComicsList,
  FavIconFill,
} from "./Modal.elements";

import { useDispatch, useSelector } from "react-redux";

import {
  addFavoriteAction,
  removeFavoriteAction,
} from "../../actions/dataActions";

const Modal = ({ showModal, setShowModal, comics }) => {
  const dispatch = useDispatch();
  const modalRef = useRef();

  const perSelect = useSelector((state) => state.personajes.personajeSelect);
  const favorites = useSelector((state) => state.personajes.personajesFav);

  let storeChar = favorites.find((o) => o.id === perSelect.id);

  const changeColor = storeChar ? "#FFC700" : "#63500d";

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setShowModal(false);
    }
  };

  return (
    <>
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
              imgurl={`${perSelect.thumbnail.path}.${perSelect.thumbnail.extension}`}
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
                  <ComicsList key="1">No hay Comics disponibles</ComicsList>
                ) : (
                  comics[0].map((comic) => (
                    <ComicsList key={comic.id}>
                      <p>{comic.title}</p>
                    </ComicsList>
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
