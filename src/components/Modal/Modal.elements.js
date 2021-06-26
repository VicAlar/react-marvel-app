import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStarFill } from "react-icons/bs";

export const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

export const ModalWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #FFF;
    color: #000;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    z-index: 10;
    border-radius: 10px;

    @media (max-width: 880px) {
        width: 700px;
        height: 450px;
    }

    @media (max-width: 768px) {
        width: 600px;
        height: 600px;
        display: block;
        overflow: scroll;
    }

    @media (max-width: 660px) {
        width: 550px;
        height: 600px;
    }

    @media (max-width: 580px) {
        width: 450px;
        height: 550px;
    }

    @media (max-width: 500px) {
        width: 400px;
        height: 550px;
    }

    @media (max-width: 420px) {
        width: 350px;
        height: 400px;
    }

    @media (max-width: 360px) {
        width: 300px;
        height: 400px;
    }

    @media (max-width: 320px) {
        width: 280px;
    }
`;

export const ModalImg = styled.div`
    background-image: url(${props => props.imgurl});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    border-radius: 10px 0 0 10px;
    color: #000;
`;

export const ModalContent = styled.div`
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    line-height: 1.8;
`;

export const NamePer = styled.h1`
    font-size: 2rem;
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;

    @media (max-width: 760px) {
        font-size: 1.5rem;
    }
`;

export const Description = styled.p`
    font-size: .9rem;
    text-align: justify;
    padding: 0 5px 0 5px;

    @media (max-width: 760px) {
        font-size: 1rem;
    }

    @media (max-width: 420px) {
        font-size: .9rem;
    }
`;

export const Lista = styled.ul`
    list-style: none;
    width: 100%;
    height: 100%;
    padding: 0;
`;

export const ComicItem = styled.li`
    font-size: .8rem;
    padding: .5em;
`; 

export const CloseModalIcon = styled(AiOutlineClose)`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;

    @media (max-width: 580px) {
        color: #FFF;
    }
`;

export const FavIconFill = styled(BsStarFill)`
    cursor: pointer;
    position: absolute;
    top: 8px;
    left: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`;

export const CardWrapper = styled.div`
    width: 300px;
    height: 125px;
    display: grid;
    grid-template-columns: 1fr 75%;
    background: #FFF;

    @media (max-width: 768px) {
        width: 75%;
    }
`;

export const ComicImg = styled.div`
    background-image: url(${props => props.comicUrl});
    width: 125px;
    height: 125px;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 5px;
`;

export const ComicContent = styled.div`
    display: block;
    margin: .5em;
`;

export const ComicCharac = styled.h2`
    font-size: 1rem;
    color: #212121;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    @media (max-width: 580px) {
        font-size: 1rem;
    }

    @media (max-width: 360px) {
        font-size: 0.8rem;
    }
`;

export const ComicTitle = styled.h3`
    font-size: .8rem;
    color: #424040;

    @media (max-width: 580px) {
        font-size: .9rem;
    }

    @media (max-width: 360px) {
        font-size: 0.6rem;
    }
`;