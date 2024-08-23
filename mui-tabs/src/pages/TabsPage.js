import React, {useState} from 'react';
import {Container} from '@mui/material'
import Tabs from "../components/Tabs";
import SwiperNavigation from "../components/SwiperNavigation";
import SwiperCube from "../components/SwiperCube";
import SwiperZoom from "../components/SwiperZoom";

const VALUES = {
    one: 'one',
    two: 'two',
    three: 'three'
}

const GetCategories = ({value}) => {
    switch (value) {
        case VALUES.one:{
            return <SwiperNavigation/>
        }
        case VALUES.two:{
            return <SwiperCube/>
        }
        case VALUES.three:{
            return <SwiperZoom/>
        }
        default: return <></>
    }
}

const MainPage = () => {

    const categoriesSelect = [
        {value: VALUES.one, label: 'Navigation Swiper'},
        {value: VALUES.two, label: 'Cube Swiper'},
        {value: VALUES.three, label: 'Zoom Swiper'},
    ]

    const [value, setValue] = useState(categoriesSelect?.[0].value)

    return (
        <Container>
            <Tabs categoriesSelect={categoriesSelect} value={value} setValue={setValue}/>
            <GetCategories value={value}/>
        </Container>
    );
};

export default MainPage;