import React from 'react';
import Card from '../Card/Card';
import styled from 'styled-components';

const Grid = styled.div`
    overflow: hidden;
    display: grid;
    grid-template-columns: repeat( 4, 1fr );
    grid-gap: 15px;
    padding: 3.5rem 3rem;

    @media (max-width: 1100px) {
        grid-template-columns: repeat( 3, 1fr );
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat( 2, 1fr );
    }

    @media (max-width: 480px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-left: 40px;
    }

    @media (max-width: 420px) {
        margin-left: 20px;
    }

    @media (max-width: 380px) {
        margin: 0;
    }
`;

const Layout = () => {
    return ( 
    <div>
        <Grid>
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/075pur_com_crd_01.jpg'}
                name="Purple Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_com_crd_01.jpg'}
                name="Ant Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/dragonman_head.jpg'}
                name="Dragon Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/dragonman_head.jpg'}
                name="Dragon Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/075pur_com_crd_01.jpg'}
                name="Purple Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/010ant_com_crd_01.jpg'}
                name="Ant Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/dragonman_head.jpg'}
                name="Dragon Man"
            />
            <Card 
                imgurl={'https://terrigen-cdn-dev.marvel.com/content/prod/1x/dragonman_head.jpg'}
                name="Dragon Man"
            />
        </Grid>
     </div>
     );
}
 
export default Layout;