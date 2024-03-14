import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../store/reducer/cartSlice";

const ProductCard = (props) => {
    const {cartItems} = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const { id, image, regularPrice, promoDiscount, inStock, typeName, colorName } = props;
    
    const handleAddCart = () => {
        const item = { ...props };
        dispatch(addItem(item));
    }
    const promoPrice = parseFloat(promoDiscount) > 0 ? (regularPrice * (100 - parseFloat(promoDiscount))) / 100 : regularPrice;
    console.log(promoPrice)     
     
    return (
        <div className="product_card">
            <figure>
                <img src={image.src} alt={image.alt} onError={(e) => console.log('Error loading image:', e)} /> 
            </figure>

            <div className="inline-container">
                <div>
                    <h2 className="type">{typeName}</h2>
                    <h2 className="color">{colorName}</h2>
                </div>

                <div className="price"> 
                    <h2>Price: <del>{regularPrice} EUR</del></h2>
                    {promoDiscount > 0 && (
                    <h2>Promo price: {promoPrice} EUR</h2>
                    )}
                </div>
            </div>
            

            {cartItems.some(elem => elem.id === id) ? (
                <button className="btn" disabled>Added to cart</button>
            ) : (
                <button className="btn" onClick={handleAddCart}>Add to cart</button>
            )}
        </div>        
    );
};

export default ProductCard;
