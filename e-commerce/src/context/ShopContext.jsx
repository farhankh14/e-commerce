import React, { createContext, useState } from "react";
import all_product from "../components/assets/all_product";

export const ShopContext = createContext(null);
const getdefaultCard=()=>{
    let cart={}
    for (let index = 0; index < all_product.length; index++) {
        cart[index]=0;
        
    }
    return cart

}

const ShopContextProvider = (props) => {
    const [cartItems,setcartItems]=useState(getdefaultCard())

    const addtocart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        console.log(cartItems)
    }
    const removefromcart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
  
    const contextValue = { all_product,cartItems,addtocart,removefromcart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;