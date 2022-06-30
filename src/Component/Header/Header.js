import './Header.css';
import Container from 'react-bootstrap/Container';
import React from 'react';

const Header = () => {
    return <div className="header">


        <Container>
            <div className="header-contains">
                <h2>FAITE TRAITER VOS COMPAGNONS PAR NOS MEILLEURS SPÉCIALISTES</h2>
                <p>Notre but est de prodiguer les meilleurs soins à vos animaux</p>
                <a className='btn-green'>Prendre rendez-vous</a>
            </div>
        </Container>




    </div>
}

export default Header;