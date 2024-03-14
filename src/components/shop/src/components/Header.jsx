import { useSelector,useDispatch } from "react-redux";
import { toglleCartOpen } from "../store/reducer/cartSlice";

const Header = () => {
const dispatch=useDispatch();
    const {cartItems}=useSelector((state)=> state.cart);
     const counter=cartItems.length;
     const handleOpenCart=()=>{
        dispatch(toglleCartOpen(true));
     }
    return (
        <div className="header">
            <div className="container">
                <div className="navbar">
                    <h1>Souvenir Shop</h1>
                    <div className="nav_menu">
                        <div className="cart-icon" onClick={handleOpenCart}>
                            <img src="./images/bag-icon.svg" alt="bags" />
                            <div className="badge">{counter}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;