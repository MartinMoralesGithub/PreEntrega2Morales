import React, {useState} from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contador = ({stock, initial,onAdd}) => {
const [counter, setCounter] = useState(initial)


const handleClickSuma = () => {
  if (counter < stock) {
    setCounter(counter +1) //aca no se puede usar sugarsintax
  }
}

const handleClickResta = () => {
  if (counter >1) {
    setCounter(counter -1) //aca no se puede usar sugarsintax
  }
}

const notification = () => toast('Producto agregado', {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  });

return (<>
<div className="flex items-center justify-center w-full">
  <div className="flex flex-col items-center justify-between w-full max-w-2xl px-16">
    <div className="flex items-center justify-between w-full space-x-4">
      <button className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-2 px-4 rounded" onClick={() => handleClickResta()} disabled={counter === 0}>-</button>
      <div className="font-bold">{counter}</div>
      <button className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-2 px-4 rounded" onClick={() => handleClickSuma()}>+</button>
    </div>
    <button className="border border-[#FF6C4D] text-[#FF6C4D] hover:bg-[#FF6C4D] hover:text-white font-bold py-2 px-4 rounded mt-4 w-full" onClick={()=>{onAdd(counter); notification();}} disabled={!stock}>Agregar al carrito</button>
  </div>
</div>



    
</>);
}

export default Contador