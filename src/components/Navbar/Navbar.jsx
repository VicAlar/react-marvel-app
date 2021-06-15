import React from 'react';
import { Nav, Logo, InputContainer, SearchIcon, TextInput, StarIcon } from './Navbar.elements';


const Navbar = () => {
    return ( 
        <>
            <Nav>
                <Logo />
                <InputContainer>    
                    <SearchIcon />
                    <TextInput 
                        placeholder="Buscar"
                    />
                </InputContainer>
                <StarIcon />
            </Nav>
        </>
     );
}
 
export default Navbar;