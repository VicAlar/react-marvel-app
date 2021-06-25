import React, { useState, useEffect } from "react";
import {
  Nav,
  Logo,
  Marvel,
  InputContainer,
  SearchIcon,
  TextInput,
  StarIcon,
  StarIconFill,
} from "./Navbar.elements";
import { useLocation, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import {
  getSearchTermAction,
  filterSearchAction,
} from "../../actions/dataActions";

const Navbar = () => {
  //State para la busqueda del input

  const [searchTerm, setSearchTerm] = useState("");

  //Redux
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchTerm !== "") {
      const loadFilter = () => dispatch(filterSearchAction(searchTerm));
      loadFilter();
    }
    //eslint-disable-next-line
  }, [searchTerm]);

  const location = useLocation();

  const { pathname } = location;

  const splitLocation = pathname.split("/");

  return (
    <>
      <Nav>
        <Logo to="/">
          <Marvel />
        </Logo>

        <InputContainer>
          <SearchIcon />
          <TextInput
            placeholder="Buscar"
            name={searchTerm}
            onChange={(e) =>
              dispatch(getSearchTermAction(setSearchTerm(e.target.value)))
            }
          />
        </InputContainer>
        <Link to="/favorites">
          {splitLocation[1] === 'favorites' ? <StarIconFill fill="#FFC700" /> : <StarIcon /> }
        </Link>
      </Nav>
    </>
  );
};

export default Navbar;
