import { Box, Typography, Button, Container } from '@mui/material';
import { RootState } from '../../redux/store';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import { useEffect } from 'react';
import {
  loadFavoriteFromLocalStorage,
  saveFavoriteToLocalStorage,
} from '../../helpers/localStorage';
import { PageContainer } from '../cart/Cart.styles';
import {
  clearFavorites,
  loadFavorite,
} from '../../redux/reducers/favoriteSlice';
import { CardsWrapper } from './Favorite.styles';
import ProductCard from '../../components/product-card/ProductCard';

const Favorite = () => {
  const dispatch = useAppDispatch();
  const { favoriteItems } = useAppSelector(
    (state: RootState) => state.favoriteReducer
  );

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const loadedFavoriteItems = loadFavoriteFromLocalStorage();
    if (loadedFavoriteItems.length > 0) {
      // Dispatch an action to update the Redux store with the loaded favorite items
      dispatch(loadFavorite(loadedFavoriteItems));
    }
  }, [dispatch]);

  useEffect(() => {
    saveFavoriteToLocalStorage(favoriteItems);
  }, [favoriteItems]);

  return (
    <PageContainer>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4 }}
      >
        <Typography variant="h4">YOUR FAVORITE PRODUCTS</Typography>
      </Box>
      {favoriteItems.length === 0 ? (
        <Box
          sx={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            my: 4,
          }}
        >
          <Typography variant="h6">is currently empty!</Typography>
        </Box>
      ) : (
        <Container>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              my: 4,
            }}
          >
            <CardsWrapper>
              {favoriteItems.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </CardsWrapper>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: '400px',
                backgroundColor: 'red',
                m: 4,
              }}
              onClick={() => dispatch(clearFavorites())}
            >
              Clear Favorites
            </Button>
          </Box>
        </Container>
      )}
    </PageContainer>
  );
};

export default Favorite;
