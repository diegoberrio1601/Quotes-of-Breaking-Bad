import React from 'react';
import Frases from './Frases';
import styled from '@emotion/styled';

const Contenedor = styled.div`
    width: 90vw;
    margin: 0 auto;
    padding:15px;
    border-radius: 10px;
    background-color:white;
    /* background-color: #dcedc1; */
    -webkit-box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.51);
-moz-box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.51);
box-shadow: 0px 3px 5px 1px rgba(0,0,0,0.51);

@media (max-width:600px) {
    width: 80vw;
    height:80vh;
    
    }
`;

const Header = styled.header`
    display:flex;
    /* background-color: #ffd3b6; */
    justify-content: space-between;
    height:50px;
`;


const Card = () => {
    return ( 
       <Contenedor>
            <Header>
                <img className="header-menu" src="images/icon.png" alt="Logo Menú"/>
                <img className="header-home" src="images/Logo_Netflix.png" alt="Logo Netflix"/>
                <img className="header-user" src="images/dig.jpg" alt="Logo User"/>
            </Header>
            <Frases/>
       </Contenedor>
     );
}
 
export default Card;