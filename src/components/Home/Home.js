import React from 'react';
import './Home.css';
import { Container, Row, Col} from 'react-bootstrap';
import AdoptionsImage from './../../assets/images/AdoptionsImage.png';
import FoundAndLostImage from './../../assets/images/FoundAndLostImage.png';
import HomeImages from './HomeImage';
import HomeCarousel from './HomeCarousel';

class Home extends React.Component {
    render() {
        return (
        <div style={{marginTop: 70}}>
            <Container fluid>
            <Row>
                <Col style={{marginRight:'3%', marginLeft:'1%'}}>
                    <Row>
                        <HomeCarousel />
                    </Row>
                    <Row>
                        perdidos y encontrados destacados
                    </Row>
                </Col>
                <Col>
                    <Row style={{marginBottom:'4%'}}>
                        <HomeImages image={FoundAndLostImage} name="Perdidos y Encontrados" textPosition="right" link="/lost-and-found-cats" />
                    </Row>
                    <Row>
                        <HomeImages image={AdoptionsImage} name="Adopciones" textPosition="left" link="/adoption-cats" />
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