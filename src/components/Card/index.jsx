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
import { Add_To_Cart, Remove_From_Cart } from '../../store/slices/cart';

export default function RecipeReviewCard({ products }) {
  
  const dispatch = useDispatch();
  const itemCount = useSelector((state) => state.cartSlice);
console.log({itemCount})

  const handleAddToCart = () => {
    dispatch(Add_To_Cart());
  };

  const handleRemoveFromCart = () => {
    dispatch(Remove_From_Cart());
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {products.map((product) => {
        console.log(product)
        return (
        <Card key={product.id} sx={{ maxWidth: 345 }} className="card-item">
          <CardHeader
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={product?.title}
            subheader="September 14, 2016"
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
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
            <div className="flex w-full justify-end mr-4">
              <Button variant="outlined" onClick={handleAddToCart}>Add to Cart {itemCount}</Button>
            </div>
          </CardActions>
        </Card>
      )})
    }
    </div>
  );
}
