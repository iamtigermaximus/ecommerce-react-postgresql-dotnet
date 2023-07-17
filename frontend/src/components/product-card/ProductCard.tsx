import { Box, Typography } from '@mui/material';
import {
  ProdCard,
  ProductCardButton,
  ProductCardContent,
  ProductCardName,
  ProductCardPrice,
  CardImageContainer,
} from './ProductCard.styles';
import { useAppDispatch } from '../../hooks/reduxHook';
import { addToCart } from '../../redux/reducers/cartSlice';
import { useNavigate } from 'react-router-dom';
import { ProductCardProps } from '../../types/product';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

const ProductCard = ({ product }: ProductCardProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <ProdCard key={product.id}>
      <CardImageContainer onClick={() => navigate(`/category/${product.name}`)}>
        {/* <CardMedia component="img" height="200" image={product.image} /> */}
        <LazyLoadImage
          effect="blur"
          src={product.image}
          alt={product.name}
          height={200}
        />

        <Box
          sx={{
            position: 'absolute',
            top: 3,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            zIndex: 2,
          }}
        >
          <Typography
            sx={{
              fontSize: '10px',
              textTransform: 'uppercase',
              color: 'white',
              padding: '2px 5px',
              background: '#32CD32',
              display: 'flex',
              borderRadius: '50px',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {product.categoryName}
          </Typography>
          <FavoriteBorderOutlinedIcon sx={{ color: 'black' }} />
        </Box>
      </CardImageContainer>

      <ProductCardContent>
        <ProductCardButton
          variant="outlined"
          color="inherit"
          onClick={() => dispatch(addToCart(product))}
        >
          ADD TO CART
        </ProductCardButton>
        <ProductCardName
          sx={{
            textTransform: 'uppercase',
          }}
        >
          {product.name}
        </ProductCardName>
        <ProductCardPrice>$ {product.price}</ProductCardPrice>
      </ProductCardContent>
    </ProdCard>
  );
};

export default ProductCard;
