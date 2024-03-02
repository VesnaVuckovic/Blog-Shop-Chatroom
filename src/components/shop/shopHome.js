import { useEffect, useState } from "react"
import axios from "axios";
import ProductCard from "./shop-components/ProductCard";

const shopHome = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/VesnaVuckovic/api-products/main/products.json')
            .then((response) => setData(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div>
            <section>
                <div className="container">
                    <div className="shopHome_content">
                        {data.map((elem) => <ProductCard key={elem.id} {...elem} />)}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default shopHome;