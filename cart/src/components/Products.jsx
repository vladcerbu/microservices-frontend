import {Typography} from "@mui/material";
import './styles/products.css'
import axios from "axios";
import {useEffect, useState} from "react";

const Products = ({productList}) => {

    const [allProducts, setAllProducts] = useState([]);

    const computePrice = () => {
        let total = 0;
        productList.forEach((product) => {
            for(let i = 0; i < allProducts.length; i ++){
                if(product.productId === allProducts[i].productId){
                    total += Number(allProducts[i].price.slice(0, -4)) * product.number;
                }
            }
        });
        return total;
    }

    useEffect(() => {
        axios.get(`http://${location.hostname}:8080/api/getAllProducts`)
            .then((res) => setAllProducts(res.data));
    }, []);

    return (
        <div className="cart_products">
            {
                productList.map((product) => (
                    <Typography
                        key={product.productId}
                        variant="body"
                    >
                        {product.number}x {product.title.toUpperCase()}
                    </Typography>
                ))
            }
            <Typography variant="h6">
                Total: <span className="cart_price--red">{computePrice()} EUR</span>
            </Typography>
        </div>
    )
}

export default Products;
