import React from 'react';
import ItemCount from '../Componentes/ItemCount'

const ItemDetail = ({ nombre, imagen }) => {
    return (
        <div className="mx-auto my-auto p-12 rounded-lg text-center shadow-xl ">
           <h2 className="text-xl font-bold">{nombre}</h2>
            {/* <p className="text-gray-600">Precio: {Item.precio}</p> */}
            <img src={imagen} alt={nombre} className="mt-4 mx-auto" />
            <ItemCount stock={10} initial={1} onAdd={(counter)=> console.log("Cantidad Agregada", counter)}/>
        </div>
    );
}

export default ItemDetail;