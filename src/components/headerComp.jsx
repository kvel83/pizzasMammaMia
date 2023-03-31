import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ShoppingCart from '@mui/icons-material/ShoppingCart';

import logo from '../assets/img/logo.png';
import './headerComp.css';
import {MyContext} from '../utils/MyContext'

const HeaderComp = () => {
    const { total } = useContext(MyContext)
    return(
        <>
            <Grid container spacing = {1} display="flex" justifyContent="space-evenly" alignItems="center" marginBottom="10px">
                <Grid item s={12} md={3} className='logo'>
                    <img src={logo} alt="logo mamma mia" />
                </Grid>
                <Grid item s={12} md={3}>
                    <NavLink to='/'>
                        <Button variant="contained" size="large" color="error" className="promos" >Promociones</Button>
                    </NavLink>
                </Grid>
                <Grid item s={12} md={3}>
                    <NavLink to='/'>
                        <Button variant="contained" size="large" color="error" style={ {textDecoration: 'none!important'}} >Pizzas</Button>
                    </NavLink>
                </Grid>
                <Grid item s={12} md={3}>
                    <NavLink to='/Carrito'>
                        <Button variant="contained" size="large" color="error"  startIcon={<ShoppingCart />}>{total} Pizzas</Button>
                    </NavLink>
                </Grid>
            </Grid>
        </>
    )
}

export default HeaderComp;