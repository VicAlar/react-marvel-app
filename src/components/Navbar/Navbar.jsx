import React, { useState, useEffect } from 'react';
import { Nav, Logo, InputContainer, SearchIcon, TextInput, StarIcon } from './Navbar.elements';

import { useDispatch } from 'react-redux';
import { getSearchTermAction, filterSearchAction } from '../../actions/dataActions';

const Navbar = () => {

    //State para la busqueda del input

    const [searchTerm, setSearchTerm] = useState('');

    //Redux
    const dispatch = useDispatch();

    useEffect(() => {
        if (searchTerm !== '') {
            const loadFilter = () => dispatch( filterSearchAction(searchTerm));
            loadFilter();
        }
    }, [searchTerm, dispatch])



    return ( 
        <>
            <Nav>
                <Logo />
                <InputContainer>    
                    <SearchIcon />
                    <TextInput 
                        placeholder="Buscar"
                        name={searchTerm}
                        onChange={(e) => dispatch( getSearchTermAction(setSearchTerm(e.target.value)))}
                    />
                </InputContainer>
                <StarIcon />
            </Nav>
        </>
     );
}
 
export default Navbar;