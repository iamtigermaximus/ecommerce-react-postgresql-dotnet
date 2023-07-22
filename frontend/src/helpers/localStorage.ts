import { CartItem, ICartProducts } from '../types/cart';

const CART_LOCAL_STORAGE_KEY = 'cartItems';

export const saveCartToLocalStorage = (cartItems: CartItem[]) => {
  const cartProducts: ICartProducts[] = cartItems.map((item) => ({
    ...item,
    cartQuantity: item.itemQuantity,
  }));
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartProducts));
};

export const loadCartFromLocalStorage = (): ICartProducts[] => {
  // implementation to retrieve cart items from local storage
  const cartItemsJSON = localStorage.getItem('cartItems');
  if (cartItemsJSON) {
    return JSON.parse(cartItemsJSON) as ICartProducts[];
  } else {
    return [];
  }
};
