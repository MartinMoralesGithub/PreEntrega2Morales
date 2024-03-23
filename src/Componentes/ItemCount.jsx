import React, {useState} from "react"


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


return (<>
<div className="flex items-center justify-center w-full">
  <div className="flex flex-col items-center justify-between w-full max-w-2xl px-16">
    <div className="flex items-center justify-between w-full space-x-4">
      <button className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-2 px-4 rounded" onClick={() => handleClickResta()} disabled={counter === 0}>-</button>
      <div className="font-bold">{counter}</div>
      <button className="bg-[#FF6C4D] hover:bg-[#ff8b74] text-white font-bold py-2 px-4 rounded" onClick={() => handleClickSuma()}>+</button>
    </div>
    <button className="border border-[#FF6C4D] text-[#FF6C4D] hover:bg-[#FF6C4D] hover:text-white font-bold py-2 px-4 rounded mt-4 w-full" onClick={()=>onAdd(counter)} disabled={!stock}>Agregar al carrito</button>
  </div>
</div>



    
</>);
}

export default Contador