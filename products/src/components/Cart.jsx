import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './styles/cart.css';

const Cart = ({number, cartClicked}) => {

    return (
        <Badge badgeContent={number} color="error" onClick={cartClicked}>
            <ShoppingCartIcon color="primary" className="products_cart"/>
        </Badge>
    )
};

export default Cart;
