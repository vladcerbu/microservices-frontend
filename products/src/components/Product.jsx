import {Button, Card, CardActions, CardContent, CardMedia, Chip, Typography} from "@mui/material";
import './styles/product.css';

const Product = ({id, title, description, price, imageSource, addToCart}) => {
    return (
        <Card className="products_product--wrapper">
            <CardMedia
                image={imageSource}
                title={title}
                component="img"
                className="products_product--image"
            />
            <CardContent className="products_product--content">
                <Typography gutterBottom variant="h5" component="div" className="products_product--title">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary" className="products_product--description">
                    {description}
                </Typography>
            </CardContent>
            <CardActions className="products_product--actions">
                <Button size="small" onClick={() => addToCart(id)}>Add to cart</Button>
                <Chip color="error" label={price} />
            </CardActions>
        </Card>
    )
}

export default Product;
