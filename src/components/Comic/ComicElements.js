import styled from 'styled-components';

export const ContainerComic = styled.div`
    padding: 3rem;
    width: 100%;
    height: 90vh;
    display: grid;
    grid-template-columns: 40% 60%;
    grid-gap: 1rem;

    @media (max-width: 480px) {
        display: block;
        padding: 2rem;
    }
`;

export const ComicImg = styled.div`
    background-image: url(${props => props.imgurl});
    background-size: contain;
    background-repeat: no-repeat;
    width: 100%;
    height: 100%;

    @media (max-width: 940px) {
        background-size: 100%;
    }
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    color: #212121;

    @media (max-width: 480px) {
        margin-top: -30px;
    }
`;

export const Item = styled.p`
    font-size: 1rem;
    color: #212020;
    font-weight: 700;
`;

export const Description = styled.p`
    padding: 2rem 0;
    font-size: 1.2rem;
    font-weight: 500;
    color: #212121;
`;