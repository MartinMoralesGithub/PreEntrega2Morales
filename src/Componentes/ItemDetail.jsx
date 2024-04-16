import React, { useContext, useState } from 'react';
import ItemCount from '../Componentes/ItemCount'
import { CartContext } from '../context/Cartcontext';

const ItemDetail = ({ id, nombre, imagen, precio, descripcion }) => {// esto es una desestructuración para no tener que poner item.nombre y poner solo nombre.

const [quantityAdded, setQuantityAdded] = useState(0)
const {addItem} = useContext(CartContext)

const handleOnAdd = (counter) => {
    setQuantityAdded(counter)
    const item = {id, nombre, precio, descripcion, imagen}

    addItem(item,  counter)}


    return (
        <div className="mx-auto my-auto p-12 rounded-lg text-center shadow-xl">
           <h2 className="text-xl font-bold mb-2">{nombre}</h2>
            <p className="text-gray-600">{descripcion}</p>
            <p className="text-gray-600">Precio: ${precio}</p>
            <img src={imagen} alt={nombre} className="mt-4 mx-auto" />
            <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
            {/* <ItemCount stock={10} initial={1} onAdd={(counter)=> console.log("Cantidad Agregada", counter)}/> */}
        </div>
    );
}
export default ItemDetail;