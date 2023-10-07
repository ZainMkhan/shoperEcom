import {createContext, useContext, useState, ReactNode} from "react";

type CartItem = {
    id: number
    qty: number
}

type ShoppingCartContext = {
    emptyCart: () => void;
    getItemQty: (id:number) => number
    increaseQty: (id: number) => void
    decreaseQty: (id: number) => void
    removeItem: (id: number) => void
    cartQty: number
    cartItem: CartItem[]
}

type ShoppingCartProviderProps = {
    children:  ReactNode
}



const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoppingCart(){
    return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}: ShoppingCartProviderProps){
    const [cartItem, setCartItem] = useState<CartItem[]>([]);

    function getItemQty(id: number){
        return cartItem.find(item => item.id === id)?.qty || 0;
    }

    function increaseQty(id:number ){
        setCartItem(currItem => {
            if(currItem.find(item => item.id === id)== null){
                return [...currItem, {id , qty : 1}]
            }else{
                return currItem.map(item => {
                    if(item.id === id){
                        return {...item , qty: item.qty + 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    function decreaseQty(id: number){
        setCartItem(currItem => {
            if(currItem.find(item => item.id === id)?.qty === 1){
                return currItem.filter(item => item.id !== id)
            }else{
                return currItem.map(item => {
                    if(item.id === id){
                        return {...item , qty: item.qty - 1}
                    }else{
                        return item;
                    }
                })
            }
        })
    }

    function removeItem(id: number){
        setCartItem(currItem =>{
            return currItem.filter(item => item.id !== id);
        })
    }

    function emptyCart(){
       return  setCartItem([]);
    }

    
    const cartQty = cartItem.reduce((quantity, item) => item.qty + quantity, 0);



    return <ShoppingCartContext.Provider value={{getItemQty, increaseQty, decreaseQty, removeItem, cartQty, cartItem, emptyCart}}>
        {children}
        </ShoppingCartContext.Provider>
}