import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import { BsStarFill } from "react-icons/bs";

export const Background = styled.div`
    width: 100%;
    height: 100%;
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

    @media (max-width: 760px) {
        width: 600px;
        height: 400px;
    }

    @media (max-width: 660px) {
        width: 550px;
        height: 400px;
    }

    @media (max-width: 580px) {
        width: 400px;
        height: 600px;
        grid-template-columns: none;
        grid-template-rows: 1fr 1fr;
    }

    @media (max-width: 440px) {
        width: 350px;
    }

    @media (max-width: 380px) {
        width: 300px;
        height: 550px;
    }

    @media (max-width: 320px) {
        width: 270px;
        height: 500px;
    }

    @media (max-width: 280px) {
        width: 240px;
        height: 470px;
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
    text-align: center;
    padding: 0 5px 0 5px;

    @media (max-width: 760px) {
        font-size: .8rem;
    }
`;

export const Lista = styled.ul`
    list-style: none;
    width: 400px;
    height: 100%;
`;

export const ComicsList = styled.li`
    margin-top: -10px;
    font-size: .8rem;

    @media (max-width: 760px) {
        margin-left: 25px;
    }

    @media (max-width: 320px) {
        margin-left: 50px;
    }

    @media (max-width: 280px) {
        font-size: .7rem;
    }
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