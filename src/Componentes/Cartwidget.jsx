import React, { useContext } from 'react';
import ShoppingCart from "../assets/ShoppingCart.svg";
import { CartContext } from '../context/Cartcontext';
import { Link } from 'react-router-dom';

const Cartwidget = () =>{
    
    const {sumarCantidades} = useContext(CartContext)


    return (<>
    <Link to={`/cart/`} style={{display:sumarCantidades() > 0 ? 'block' : 'none'}}>
    <div className="flex" >
        <img src={ShoppingCart} alt="ShoppingCart" />
        <span className="font-semibold">({sumarCantidades()})</span>
    </div>
    </Link>
    </>)
}

export default Cartwidget;

