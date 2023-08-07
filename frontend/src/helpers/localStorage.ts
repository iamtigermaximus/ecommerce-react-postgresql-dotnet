import { CartItem, ICartProducts } from '../types/cart';
import { Product } from '../types/product';

const CART_LOCAL_STORAGE_KEY = 'cartItems';
const FAVORITE_LOCAL_STORAGE_KEY = 'favoriteItems';

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

export const saveFavoriteToLocalStorage = (favoriteItems: Product[]) => {
  const favoriteProducts: Product[] = favoriteItems.map((item) => ({
    ...item,
  }));
  localStorage.setItem(
    FAVORITE_LOCAL_STORAGE_KEY,
    JSON.stringify(favoriteProducts)
  );
};

export const loadFavoriteFromLocalStorage = (): Product[] => {
  // implementation to retrieve cart items from local storage
  const favoriteItemsJSON = localStorage.getItem('favoriteItems');
  if (favoriteItemsJSON) {
    return JSON.parse(favoriteItemsJSON) as Product[];
  } else {
    return [];
  }
};
