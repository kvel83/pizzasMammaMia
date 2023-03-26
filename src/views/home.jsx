import React from "react";
import { useContext } from "react";

import Grid from '@mui/material/Grid';

import BannerComp from '../components/bannerComp';
import CardComp from '../components/cardComp';
import { MyContext } from '../utils/MyContext'
const Home = () => {
const { pizzas } = useContext(MyContext);

console.log(pizzas);
    return (
        <>
            <BannerComp />
            <Grid container justifyContent="center" marginTop="10px" marginBottom="20px" gap="20px">
                {
                    pizzas?.map(pizza => (
                        <CardComp pizza={pizza} />
                    ) )
                }


            </Grid>
        </>
    )
}

export default Home;