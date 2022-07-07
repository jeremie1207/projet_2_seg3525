import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './MyNavBar.css';
import React from 'react';



const MyNavNar = () => {
    return (
        <div className='my-nav-bar'>
            <Navbar expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="#">VET CLINIC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="ms-auto"
                            navbarScroll
                        >
                            <Nav.Link href='#'>Accueil</Nav.Link>
                            <Nav.Link href="projet_2_seg3525#services">Nos services</Nav.Link>
                            <Nav.Link href="projet_2_seg3525#notre_equipe" disabled>Notre équipe</Nav.Link>
                            <Nav.Link href="projet_2_seg3525#comments">Avis de nos client</Nav.Link>
                            <Nav.Link href="projet_2_seg3525#contact" disabled>Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>

    );

}

export default MyNavNar;