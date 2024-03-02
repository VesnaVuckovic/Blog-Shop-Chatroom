  import { useDispatch, useSelector } from "react-redux";
  import { addItem } from "../shopReducer";

  const ProductCard = (props) => {

    const { searchQuery } = useSelector((state) => state.cart);
    const { cartItems } = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const { id, type, color, availableSizes, size, price, inStock, image } = props;

    const handleAddCart = () => {
      const item = { ...props };
      dispatch(addItem(item));
    };

    const shouldShowProduct = searchQuery === '' || title.toLowerCase().includes(searchQuery.toLowerCase());

    if (!shouldShowProduct) {
      return null;
    }

    return (
      <div className="product_card">
        <figure>
          <img src={image} alt={type&color} />
        </figure>
        <strong className="type">{type} </strong>
        <h2 className="color">{color}</h2>
        <h4 className="price">{price}</h4>
        <h4 className="availableSizes">{availableSizes}</h4>
        <h4 className="size">{size}</h4>
        <h4 className="inStock">{inStock}</h4>      
        {cartItems.some((elem) => elem.id === id) ? 
        <button className="btn" disabled>In the cart</button>:
        <button className="btn" onClick={handleAddCart}>Add to cart</button>
        }
      </div>
    );
  };

  export default ProductCard;
