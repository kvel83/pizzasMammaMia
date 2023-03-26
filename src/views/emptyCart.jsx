import React from "react";
import { NavLink } from "react-router-dom";


import { Button } from "@mui/material";

import './emptyCart.css';

const EmptyCart = () =>{
    return(
      <>
        <div className="emptyCart">
        <p>No hay ninguna pizza en tu carrito, ¿seguro que no tienes hambre?, puedes agregar pizzas desde el botón.</p>
        <img src="https://e0.pxfuel.com/wallpapers/714/204/desktop-wallpaper-sad-face-sad-emoji.jpg" alt="emoji triste" className="imgEmptyCart" />
        </div>
        <NavLink to='/' style={{display: 'flex', justifyContent:'center', marginBottom: '10rem'}}>
            <Button variant="contained" size="large" color="error" >Agregar Pizzas</Button>
        </NavLink>
      </>
    )
}

export default EmptyCart;