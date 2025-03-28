// RecipeReviewCard.jsx
import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Add_To_Cart, Remove_From_Cart, Toggle_Favourite } from '../../store/slices/cart';

export default function RecipeReviewCard({ products }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice);

  const handleAddToCart = (product) => {
    dispatch(Add_To_Cart(product));
  };

  const handleRemoveFromCart = (product) => {
    dispatch(Remove_From_Cart(product)); 
  };

  const handleToggleFavourite = (product) => {
    dispatch(Toggle_Favourite(product));
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        const isProductInCart = !!cartItem;
        const isFavorited = cartItem?.isFavorited || false;
        
        return (
          <Card key={product.id} sx={{ maxWidth: 345 }} className="card-item">
            <CardHeader
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={product?.title}
            />
            <CardMedia
              component="img"
              height="194"
              image={product?.image}
              alt={product?.title}
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product?.description}
              </Typography>
              Rating: {product?.rating.rate} /5
            </CardContent>

            <CardActions disableSpacing>
              <IconButton 
                aria-label="add to favorites"
                onClick={() => handleToggleFavourite(product)}
              >
                <FavoriteIcon 
                  color={isFavorited ? "error" : "inherit"}
                />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <div className="flex w-full justify-end mr-4">
                {isProductInCart ? (
                  <Button variant="outlined" onClick={() => handleRemoveFromCart(product)}>
                    Remove from Cart
                  </Button>
                ) : (
                  <Button variant="outlined" onClick={() => handleAddToCart(product)}>
                    Add to Cart
                  </Button>
                )}
              </div>
            </CardActions>
          </Card>
        );
      })}
      <div className="cart-count">
        <p>Items in Cart: {cart.length}</p>
      </div>
    </div>
  );
}