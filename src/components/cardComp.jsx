import React, {useState} from "react";
import { useContext } from "react";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import ModalComp from './modalComp';

import './cardComp.css';
import { MyContext } from '../utils/MyContext'


const CardComp = (props) => {
  const {pizza} = props;
  const [openModal, setOpenModal] = useState(false);
  const {pizzas, addToCar, carrito } = useContext(MyContext);
  let priceFormatted = null;

  const handleModalOpen = () =>{
    setOpenModal(true);
  }
  const handleModalClose = ( )=>{
    setOpenModal(false);
  }
  const handleAddToCar = (id) =>{
    addToCar(id);
    console.log(carrito);
  }
    return (
        <Card sx={{ maxWidth: 345 }} className='card' >
      <CardMedia
        component="img"
        alt={pizza.name}
        height="140"
        image={pizza.img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pizza.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <ul>
          {pizza.ingredients?.map(ingredient =>(
            <li>{ingredient}</li>
          ))}
          </ul>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" className="cardButton" onClick={handleModalOpen}>Detalles</Button>
        <Button size="small" className="cardButton" onClick={() => handleAddToCar(pizza.id)} >Agregar a carrito</Button>
      </CardActions>
      <ModalComp openModal={openModal} pizza={pizza} handleModalClose={handleModalClose} handleAddToCar = {handleAddToCar}/>
    </Card>
    )
}

export default CardComp;
