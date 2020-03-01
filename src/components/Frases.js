import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const ContenedorFrases = styled.div`
    /* background-color: #ffaaa5; */
    height: 40vh;
    padding: 30px 0;
    display: flex;
    justify-content: space-around;

    @media (max-width:600px) {
        display: flex;
        flex-direction:column;
        align-items:center;
        height:60vh;
        
    }
`;

const ContenidoFrases = styled.div`
    /* background-color: #a8e6cf; */
    width: 60vw;
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items:center;
`;

const Frases = () => {

    const [frase, guardarFrase] = useState({});

    const consultarAPI = async () => {
        const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes')
        const frase = await api.json()
        guardarFrase(frase[0]);
    }

    //Cargar una frase
    useEffect( () => {
        consultarAPI()
    }, [] )

    return ( 
        <ContenedorFrases>
            <img className="contenedor-frases-img" src="images/breaking-bad-cover.jpg" alt="Portada Breaking Bag"/>
            <ContenidoFrases>
                <p className="frases-titulo">Quotes of Breaking Bad</p>

                <q className="frases-parrafo">
                    {frase ? frase.quote : "Click en generar."}
                </q>
                <b>-{frase.author}</b>

                <button 
                onClick={ () => consultarAPI() } className="frases-boton">Generate</button>
            </ContenidoFrases>
        </ContenedorFrases>
     );
}
 
export default Frases;