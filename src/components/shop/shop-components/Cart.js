import { useSelector, useDispatch } from "react-redux"
import { toggleCartOpen, deleteAll, increment, decrement,deleteItem, } from "../shopReducer"



const Cart = () => {

    const { isOpen, cartItems } = useSelector(state => state.cart);

    const qtyIn = cartItems.length;

    const dispatch = useDispatch();


    const handleOpenCart = () => {

        dispatch(toggleCartOpen(false));
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

    return (
        <>

            {isOpen && (

                <div id="cart">
                    <div className="cart_head">
                        <h2>Cart</h2>
                        <div className="close_btn" onClick={handleOpenCart}><span>&times;</span></div>
                    </div>
                    <div className="cart_body">
                        {qtyIn === 0 ? (<h2>Your cart is empty.</h2>) :
                            (

                                <div>

                                    {cartItems.map(item => {

                                        const { id, image, title, price, quantity } = item;

                                        return (


                                            <div className="cart-items" key={id}>
                                                <figure className="cart_img">
                                                    <img src={image} alt={title} />
                                                </figure>
                                                <div className="cart_item_title">{title}</div>
                                                <div className="cart_item_price">{price}</div>
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
                                    <p className="total">Total: {cartItems.reduce((a,b)=>a+b.price*b.quantity,0)} </p>
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