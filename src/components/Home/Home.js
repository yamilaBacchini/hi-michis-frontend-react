import React from 'react';
import './Home.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import AdoptionCatsImage from './../../assets/images/AdoptionCatsImage.jpg';
import FoundCatsImage from './../../assets/images/FoundCatsImage.jpg';


class Home extends React.Component {
    render() {
        return (
        <div style={{marginTop: 70}}>
            <Container fluid>
            <Row>
                <Col>
                    <Row>
                        en adopcion destacados
                    </Row>
                    <Row>
                        perdidos y encontrados destacados
                    </Row>
                </Col>
                <Col>
                    <Row>
                        <Image fluid src={FoundCatsImage} rounded />
                    </Row>
                    <Row>
                        <Image fluid src={AdoptionCatsImage} rounded />
                    </Row>
                </Col>
                <Col>
                    Refugios
                </Col>
            </Row>
            <Row>
                noticias de gatos
            </Row>
            </Container>
        </div>
        );
    }
}

export default Home;