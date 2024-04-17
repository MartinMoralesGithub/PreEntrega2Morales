import { useContext } from "react"
import { Link } from "react-router-dom"
import { CartContext } from '../context/Cartcontext';

export const Cart = () => {

    const {cart, clearCart,sumarCantidades,sumarPrecios, removeItem}= useContext(CartContext)



    if(sumarCantidades() === 0){
        return (
            <div className="mx-auto my-auto p-12 rounded-lg text-center shadow-xl">
                <h1 className="text-xl font-bold mb-2">No hay items en el carrito</h1>
                <Link to='/' className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-4 px-4 rounded mt-4 transition-colors duration-300 flex justify-center mx-auto w-96">Volver al inicio</Link>
            </div>
        )
    }else{
        return(
            <>
            
            <div className={`${cart.length > 3 ? 'px-16 py-8 grid grid-cols-4 gap-[30px]' : 'px-16 pt-2 pb-8 flex gap-[30px] justify-center'}`}>
                {cart.map(item => (
                    <div className={`${cart.length > 3 ? 'my-auto p-12 rounded-lg text-center shadow-xl h-[40] ' : 'my-auto p-12 rounded-lg text-center shadow-xl h-[40] w-1/4'}`} key={item.id}>    
                        <h2 className="text-xl font-bold mb-2">{item.nombre}</h2>
                        <p className="text-gray-600">{item.descripcion}</p>
                        <p className="text-gray-600">Precio: ${item.precio}</p>
                        <img src={item.imagen} className="mx-auto" />
                        <p className="mx-auto font-medium" >Cantidad: {item.counter}</p>
                        <button 
                            onClick={() => removeItem(item.id)} 
                            className="border border-[#FF6C4D] text-[#FF6C4D] hover:bg-[#FF6C4D] hover:text-white font-bold py-4 px-4 rounded mt-4 transition-colors duration-300 flex justify-center mx-auto w-16"
                            >x
                        </button>
                    </div>
                ))}
            </div>
            <div className="grid-row items-center justify-center">
                <button 
                    onClick={() => clearCart()} 
                    className="border border-[#FF6C4D] text-[#FF6C4D] hover:bg-[#FF6C4D] hover:text-white font-bold py-2 px-2 rounded mt-2 transition-colors duration-300 flex justify-center mx-auto w-64"
                    >Limpiar Carrito
                </button>
                <h1 className="text-xl font-semibold mb-2 text-center mt-8">Total: ${sumarPrecios()}</h1>
                <div className="flex-row items-center justify-center">
                <Link 
                    to='/checkout'
                    className="bg-[#FF6C4D] hover:bg-[#ff8b74]  text-white font-bold py-4 px-4 rounded mt-4 items-center transition-colors text-center flex justify-center mx-auto w-64 duration-300"
                    >Terminar compra
                </Link>
                </div>
            </div>

            </>
        )}}