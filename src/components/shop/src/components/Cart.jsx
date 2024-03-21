import React, { useState } from 'react';
import { addItem } from '../store/reducer/cartSlice';
import { useSelector, useDispatch } from "react-redux"
import { toglleCartOpen, increment, decrement,deleteItem,deleteAll } from "../store/reducer/cartSlice"
import { calculatePromoPrice } from "../store/utils/calculatePrice";
import LoginPopup from '../../../registration/LoginPopup';

const Cart = () => {
    const { isOpen, cartItems } = useSelector(state => state.cart);
    const numberOfItems = cartItems.length;
    const dispatch = useDispatch();
    const { isLoggedIn } = useSelector(state => state.auth) || {};
    const [isPopupOpen, setIsPopupOpen] = useState(true);
            
    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };

    const handleAddToCart = () => {
        if (!isLoggedIn) {
            dispatch({ type: OPEN_POPUP });
            return;
        }
        dispatch(addItem({ id: itemId, quantity: 1, ...otherItemData }));
    };

      
      
    const handleOpenCart = () => {
        dispatch(toglleCartOpen(false));
    }

    const handleIncerement = (id) => {
        dispatch(increment(id));
    }


    const handleDeleteAll=()=>{
        dispatch(deleteAll());
    }

    const handleDecrement = (id) => {
        dispatch(decrement(id));
    }

    const handleDeleteItem=(id)=>{
        dispatch(deleteItem(id));
    }

    const total = cartItems.reduce(function(acc, item) {
        const displayPrice = calculatePromoPrice(item.regularPrice, item.promoDiscount);
        const subtotal = displayPrice * item.quantity;
        return acc + subtotal;
    }, 0);

    return (
        <>    
            {isPopupOpen && <LoginPopup onClose={closePopup} />}                
            {isOpen && (
                <div id="cart">                    
                    <div className="cart_head">
                        <h2>Cart</h2>
                        <div className="close_btn" onClick={handleOpenCart}><span>&times;</span></div>
                    </div>
                    <div className="cart_body">
                        {numberOfItems === 0 ? (<h2>Empty cart</h2>) :
                            (
                                <div>
                                    {cartItems.map(item => {
                                        const { id, image, typeName, colorName, regularPrice, quantity, } = item;                                        
                                        const displayPrice = calculatePromoPrice(item.regularPrice, item.promoDiscount);
                                        console.log(`Item: ${typeName} ${colorName}, Quantity: ${quantity}, Display Price: ${displayPrice}`);
                                        console.log("Subtotal: ", quantity * displayPrice);                                                                        
                                        return (
                                            <div className="cart-items" key={id}>
                                                <figure className="cart_img">
                                                    <img src={image.src} alt={image.alt} />
                                                </figure>
                                                <div className="cart_item_type">{typeName} {colorName}</div>
                                                <div className="cart_item_price">{displayPrice} EUR</div>                                               
                                                <div className="quantity">
                                                    <span className="qty" onClick={() => handleIncerement(id)}>+</span>
                                                    {quantity} 
                                                    <span className="qty" onClick={() => handleDecrement(id)}>-</span>
                                                </div>
                                                <div className="danger" onClick={()=>handleDeleteItem(id)}>
                                                    &times;
                                                </div></div>
                                        )
                                    })}                                    
                                    <p className="total">Total: {total} EUR</p>                                    
                                    <p className="linkD" onClick={()=>handleDeleteAll()}>Delete all</p> 
                                                                    
                                </div>
                            )}              
                    </div>
                </div>
            )}                     
        </>
    )
}


export default Cart;