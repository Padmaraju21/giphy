import React from 'react'
import "./_homeScreen.sass"
import { Col, Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Gifs from '../../components/gifs/Gifs'
import CategoriesBar from '../../components/categoriesBar/CategoriesBar';

const HomeScreen = () => {
    return (
        <Container>
            <CategoriesBar/>
            <Row>

     {[...new Array(20)].map(() => (
        <Col lg={3} md={4}>
            <Gifs/>
        </Col>
    ))}
    
               
            </Row>
        </Container>
    )
}

export default HomeScreen
