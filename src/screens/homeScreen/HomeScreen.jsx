import React from 'react'
import "./_homeScreen.sass"
import {Container } from 'react-bootstrap'
// import Row from 'react-bootstrap/Row'

import CategoriesBar from '../../components/categoriesBar/CategoriesBar';

import Gifs from '../../components/gifs/Gifs'

const HomeScreen = () => {

    return (
        <Container>
            <CategoriesBar/>
            <Gifs/>
        </Container>
    )
}

export default HomeScreen
