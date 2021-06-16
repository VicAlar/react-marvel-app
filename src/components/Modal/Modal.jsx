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
  FavIconFill
} from "./Modal.elements";

const Modal = ({ showModal, setShowModal, perSelect, comics }) => {
  const modalRef = useRef();

  const comicsAr = comics[0];

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
            <FavIconFill 
                fill='rgb(153, 130, 49)'
                stroke='#000000'
            />
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
                  <ComicsList>No hay comcis disponibles</ComicsList>
                ) : (
                  comicsAr.map((comic) => (
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
