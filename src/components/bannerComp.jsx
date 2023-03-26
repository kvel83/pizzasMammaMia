import React from "react";

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import Banner1 from '../assets/img/bannerPizza1.jpg';
import Banner2 from '../assets/img/bannerPizza2.jpg';
import Banner3 from '../assets/img/bannerPizza3.jpg';
import './bannerComp.css';

 const BannerComp = () => {
    let items = [
        {
             name:"Banner1",
             image: Banner1
        },
        {
            name: "Banner2",
            image: Banner2
        },
        {
            name: "Banner3",
            image: Banner3
        }
    ];
    function Item(props)
{
    return (
        <Paper className="carousel-paper">
            <img src={props.item.image} alt="Pizza Banner" />
        </Paper>
    )
}
    return (
        <>
        <Carousel interval={3000}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )//TODO arreglar imagenes de banner
            }
        </Carousel>
        </>
    )
}

export default BannerComp;