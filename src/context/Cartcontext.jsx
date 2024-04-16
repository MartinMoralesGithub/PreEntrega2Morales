import { createContext, useState } from "react";

export const CartContext = createContext({cart:[]});

export const CartProvider = ({children}) => {
    const [cart, setCart]= useState([]);
    console.log(cart)
    
    const sumarCantidades = () => {
        return cart.reduce((total, item) => total + item.counter, 0);
      };

    const sumarPrecios = () => {
        return cart.reduce((total, item) => total + (item.precio * item.counter), 0);
      };

    const isInCart = (id) => {
        return cart.some(prod=> prod.id === id)
    }
    
    const addItem = (Item, counter) => {
        if (!isInCart(Item.id)) {
            setCart(traer => [...traer, {...Item, counter}])
        }else {
            console.log('El producto ya fué agregado')
        }
    }
    
    const removeItem = (id) => {// *** cambiar por productId?
        const cartUpdated = cart.filter(prod => prod.id !== id)
        setCart(cartUpdated)
    }


    const clearCart = () => { // borra todo el contenido
        setCart([])
    }

    const pruebaNumero = 5

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clearCart, sumarCantidades, sumarPrecios, pruebaNumero }}>
            {children}
        </CartContext.Provider>
     );
};