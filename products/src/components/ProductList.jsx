import Product from "./Product.jsx";
import Cart from "./Cart.jsx";
import './styles/product-list.css'
import {useState, useEffect} from "react";
import axios from "axios";

const ProductList = ({cartClicked}) => {

    const [numberOfItems, setNumberOfItems] = useState(0);
    const [products, setProducts] = useState([]);

    const addToCart = async (id) => {
        await axios.post(`http://${location.hostname}:8080/api/addProductToCart`, {productId: id})
            .then(() => setNumberOfItems(numberOfItems + 1));
    }

    useEffect( () => {
        axios.get(`http://${location.hostname}:8080/api/getAllProducts`)
            .then((res) => setProducts(res.data));
        axios.get(`http://${location.hostname}:8080/api/getProductsInCart`)
            .then((res) => setNumberOfItems(res.data.numberOfProducts));
    }, [])

    return (
        <div className="products">
            <div className="products--wrapper">
                {
                    products.map((product) => (
                        <Product
                            key={product.productId}
                            id={product.productId}
                            title={product.title}
                            description={product.description}
                            imageSource={product.imageSource}
                            price={product.price}
                            addToCart={addToCart}
                        />
                    ))
                }
            </div>
            <div className="products--cart">
                <Cart number={numberOfItems} cartClicked={cartClicked}/>
            </div>
        </div>

    );
}

export default ProductList;
