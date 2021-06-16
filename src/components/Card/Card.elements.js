import styled from 'styled-components';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';

export const CardContainer = styled.div`
    min-height: 200px;
    width: 100%;
    color: #fff;
    cursor: pointer;
    z-index: 10;

    @media (max-width: 540px) {
        padding-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        padding-bottom: 1.5rem;
        margin: 0 auto;
    }
`;

export const CardImage = styled.div`
    background-image: url(${props => props.imgurl});
    background-size: cover;
    background-repeat: no-repeat;
    max-width: 280px;
    height: 320px;
    position: relative;
`;

export const FavIcon = styled(AiOutlineStar)`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const FullIcon = styled(AiFillStar)`
    width: 25px;
    height: 25px;
    position: absolute;
    top: 10px;
    right: 10px;
`;

export const CardText = styled.h2`
    font-size: 1.6rem;
    color: #FFF;
    position: absolute;
    bottom: 15px;
    left: 10px;
    -webkit-text-stroke: 1px black;
`; 