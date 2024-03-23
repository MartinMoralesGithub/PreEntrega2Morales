import ShoppingCart from "../assets/ShoppingCart.svg";

const Cartwidget = () =>{
    return (<>
    <div className="flex">
        <img src={ShoppingCart} alt="ShoppingCart" />
        <span className="font-semibold">(0)</span>
    </div>
    </>)
}

export default Cartwidget;