import React, { useState } from 'react';
import { Nav, Logo, InputContainer, SearchIcon, TextInput, StarIcon } from './Navbar.elements';

const Navbar = () => {

    //State para la busqueda del input

    const [searchTerm, setSearchTerm] = useState('');

    return ( 
        <>
            <Nav>
                <Logo />
                <InputContainer>    
                    <SearchIcon />
                    <TextInput 
                        placeholder="Buscar"
                        value={searchTerm}
                        onChange={e => setSearchTerm(e.target.value)}
                    />
                </InputContainer>
                <StarIcon />
            </Nav>
        </>
     );
}
 
export default Navbar;