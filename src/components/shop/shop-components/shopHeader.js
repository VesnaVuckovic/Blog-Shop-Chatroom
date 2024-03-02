import { useSelector, useDispatch } from "react-redux";
import { toggleCartOpen, setSearchQuery } from "../shopReducer"; 

const shopHeader = () => {
    const dispatch = useDispatch();
    const { cartItems } = useSelector((state) => state.cart);
    const bagCounter=cartItems.length; 

    const handleOpenCart = () => {
        dispatch(toggleCartOpen(true));
    };

    const searchQuery = useSelector((state) => state.cart.searchQuery);

    const handleSearchChange = (event) => {
        dispatch(setSearchQuery(event.target.value));
    };

    return (
        <div className="shopHeader">
            <div className="container">
                <div className="navbar">
                    <h1>Souvenirs Shop</h1>
                    <div className="nav_menu">
                        <div className="filter-container"> {}
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={handleSearchChange}
                            />
                        </div>
                        <div className="cart-icon" onClick={handleOpenCart}>
                            <img src="./shopping-bag-icon.svg" alt="bag" />
                            <div className="badge">{bagCounter}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default shopHeader;
