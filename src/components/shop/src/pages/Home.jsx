import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import Header from '../components/Header';


const Home = () => {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [filters, setFilters] = useState({ type: '', color: '' });
    
    const types = [
        { id: 1, name: 'T-shirt' },
        { id: 2, name: 'Cap' },
        { id: 3, name: 'Cup' }
    ];

    const colors = [
        { id: 1, name: 'White' },
        { id: 2, name: 'Black' }       
    ];
    
    
    const getElementNameById = (array, id) => {
        const item = array.find(item => item.id === id);
        return item ? item.name : '';
    };

    useEffect(() => {
        axios.get('https://raw.githubusercontent.com/VesnaVuckovic/api-products/main/products.json')
            .then(response => {
                setData(response.data.Products); 
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        console.log("useEffect triggered");
        const filteredProducts = data.filter(product => {
            if (filters.type && product.type !== parseInt(filters.type)) {
                return false; 
            }
            if (filters.color && product.color !== parseInt(filters.color)) {
                return false;
            }
            return true;
        });
        console.log("Filtered products:", filteredProducts);
        setFilteredData(filteredProducts);
    }, [data, filters]);

    
    const handleFilterChange = (filterType, filterValue) => {
        setFilters(prevFilters => ({
            ...prevFilters,
            [filterType]: filterValue
        }));
    };

    return (
        <div>
            <Header types={types} colors={colors} onFilterChange={handleFilterChange} />
            <section>
                <div className="container">
                    <div className="home_content">
                        {filteredData.map(elem => (
                            <ProductCard
                                key={elem.id}
                                img={elem.image.src}
                                alt={elem.image.alt}
                                title={elem.image.alt}
                                typeName={getElementNameById(types, elem.type)}
                                colorName={getElementNameById(colors, elem.color)}
                                regularPrice={elem.price.regularPrice}
                                promoDiscount={elem.price.promoDiscount}                                
                                promoPrice={elem.promoPrice}
                                {...elem}
                            />
                        ))}
                    </div>
                </div>
            </section>     
        </div>        
    );
}

export default Home;
