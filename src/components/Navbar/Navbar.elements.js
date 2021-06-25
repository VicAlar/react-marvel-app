import styled from "styled-components";
import { BsStar, BsStarFill, BsSearch } from "react-icons/bs";
import { ReactComponent as Icon } from "../../images/marvel-logo.svg";
import {Link} from 'react-router-dom';

export const Nav = styled.nav`
  background-color: #fff;
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  z-index: 10;
  align-items: center;
  border-bottom: 1px solid #dbd7d7;
`;

export const Logo = styled(Link)`
  
`;

export const Marvel = styled(Icon)`
  margin-right: 20px;
  width: 80px;
  height: 80px;
  justify-self: flex-start;

  @media (max-width: 1200px) {
    margin-left: 10px;
  }
`;

export const InputContainer = styled.div`
  font-family: "Arial";
  position: relative;
  margin-right: 5px;
  padding: 5px;
  width: 100%;
  border-left: 0.5px solid #e2e2e2;

  &:hover {
    box-shadow: 1px 1px 1px thistle;
  }
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  top: 4px;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  bottom: 0px;
  width: 25px;
  height: 25px;
`;

export const TextInput = styled.input`
  width: 100%;
  min-height: 25px;
  font-size: inherit;
  background-color: transparent;
  padding-left: 40px;
  font-size: 14px;
  line-height: 20px;
  border: 0;

  &:focus {
    outline: none;
  }
`;

export const StarIcon = styled(BsStar)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  color: black;

  @media (max-width: 1200px) {
    margin-right: 10px;
  }
`;

export const StarIconFill = styled(BsStarFill)`
  width: 30px;
  height: 30px;
  margin-left: 20px;
  color: black;

  @media (max-width: 1200px) {
    margin-right: 10px;
  }
`;
