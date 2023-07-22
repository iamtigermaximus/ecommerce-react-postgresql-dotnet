import { Box, Typography, Button, Container } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {
  PageContainer,
  CartItemContainer,
  CartItem,
  CartItemDetails,
  CartImage,
  ProductCardName,
  ProductCardPrice,
  QuantityContainer,
} from './Cart.styles';
import { RootState } from '../../redux/store';
import { useAppSelector, useAppDispatch } from '../../hooks/reduxHook';
import {
  removeItem,
  clearCart,
  decrementQuantity,
  addToCart,
  loadCart,
} from '../../redux/reducers/cartSlice';
import { useEffect } from 'react';
import {
  loadCartFromLocalStorage,
  saveCartToLocalStorage,
} from '../../helpers/localStorage';

const Cart = () => {
  const dispatch = useAppDispatch();
  const { cartItems } = useAppSelector((state: RootState) => state.cartReducer);

  const getTotalPrice = () => {
    return cartItems.reduce(
      (accumulator, item) => accumulator + item.itemQuantity * item.price,
      0
    );
  };

  useEffect(() => {
    // Load cart items from local storage when the component mounts
    const loadedCartItems = loadCartFromLocalStorage();
    if (loadedCartItems.length > 0) {
      // Dispatch an action to update the Redux store with the loaded cart items
      dispatch(loadCart(loadedCartItems));
    }
  }, [dispatch]);

  useEffect(() => {
    saveCartToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <PageContainer>
      <Box
        sx={{ width: '100%', display: 'flex', justifyContent: 'center', my: 4 }}
      >
        <Typography variant="h4">YOUR BAG</Typography>
      </Box>
      {cartItems.length === 0 ? (
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
            {cartItems.map((item) => {
              return (
                <CartItemContainer key={item.id}>
                  <CartItem>
                    <CartItemDetails>
                      <CartImage image={item.image} />
                    </CartItemDetails>

                    <CartItemDetails>
                      <ProductCardName>{item.name}</ProductCardName>
                      <ProductCardPrice>
                        ${item.price * item.itemQuantity}
                      </ProductCardPrice>
                      <Button
                        variant="contained"
                        onClick={() => dispatch(removeItem(item.id))}
                      >
                        remove
                      </Button>
                    </CartItemDetails>
                    <QuantityContainer>
                      <button onClick={() => dispatch(addToCart(item))}>
                        <KeyboardArrowUpIcon />
                      </button>
                      <div>{item.itemQuantity}</div>
                      <button onClick={() => dispatch(decrementQuantity(item))}>
                        <KeyboardArrowDownIcon />
                      </button>
                    </QuantityContainer>
                  </CartItem>
                </CartItemContainer>
              );
            })}
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <Box>
              <Typography variant="h5" sx={{ m: 2 }}>
                Total:${getTotalPrice()}
              </Typography>
              <Button variant="contained" sx={{ width: '100%' }}>
                Checkout
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center ',
              alignItems: 'center',
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: '400px',
                backgroundColor: 'red',
                m: 4,
              }}
              onClick={() => dispatch(clearCart())}
            >
              Clear Cart
            </Button>
          </Box>
        </Container>
      )}
    </PageContainer>
  );
};

export default Cart;
