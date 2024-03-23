import { Link } from 'react-router-dom'
import ItemCount from './ItemCount'

export const Item = ({id, nombre,imagen}) => {

    return(
    <>
<div className="grid grid-cols-1 justify-center mx-auto my-auto p-12 rounded-lg shadow-xl hover:shadow-2xl">
  <h2 className="text-xl font-bold text-center">{nombre}</h2>
  {/* <p className="text-gray-600">Precio: {precio}</p> */}
  <img src={imagen} alt={nombre} className="mt-4 mb-4 mx-auto" />
  <ItemCount stock={10} initial={1} onAdd={(counter)=> console.log("Cantidad Agregada", counter)}/>
  <Link to={`/item/${id}`} className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-4 px-4 rounded mt-4 transition-colors duration-300 flex justify-center items-center">
    Ver detalles
  </Link>
</div>


    </>

    )
}