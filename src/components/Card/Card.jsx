import React from 'react';
import { CardContainer, CardImage, CardText, FavIcon } from './Card.elements';

const Card = ({imgurl, name, fav}) => {
    return ( 
        <>
            <CardContainer>
                <CardImage
                    imgurl={imgurl}
                >
                    <FavIcon />
                    <CardText>
                        {name}
                    </CardText>
                </CardImage>
            </CardContainer>
        </>
     );
}
 
export default Card;