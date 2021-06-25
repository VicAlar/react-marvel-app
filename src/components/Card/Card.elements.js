import styled from "styled-components";
import {BsStarFill, BsStar} from 'react-icons/bs'

export const CardContainer = styled.div`
  min-height: 350px;
  width: 280px;
  color: #fff;
  position: relative;
  z-index: 10;
  margin: 0 auto;
  padding-bottom: 1.5rem;

  @media (max-width: 540px) {
    padding-bottom: 1.5rem;
  }
`;

export const CardImage = styled.div`
  background-image: url(${(props) => props.imgurl});
  background-size: cover;
  background-repeat: no-repeat;
  height: 370px;
  border-radius: 5px;
`;

export const CardText = styled.h2`
  font-size: 1.6rem;
  color: #fff;
  position: absolute;
  bottom: 15px;
  left: 10px;
  -webkit-text-stroke: 1px black;
`;

export const FavIconFill = styled(BsStarFill)`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 10px;
    width: 25px;
    height: 25px;
    padding: 0;
    z-index: 100;
`;

export const FavIcon = styled(BsStar)`
    cursor: pointer;
    position: absolute;
    top: 8px;
    right: 10px;
    width: 25px;
    height: 25px;
    padding: 0;
`;