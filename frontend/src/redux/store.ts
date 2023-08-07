import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import productReducer from './reducers/productSlice';
import cartReducer from './reducers/cartSlice';
import categoryReducer from './reducers/categorySlice';
import userReducer from './reducers/userSlice';
import authReducer from './reducers/authSlice';
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';
import favoriteReducer from './reducers/favoriteSlice';

// Combine your reducers
const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  categoryReducer,
  userReducer,
  favoriteReducer,
  auth: authReducer,
});

// Configure persist options
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cartReducer'],
  // Add any blacklist or whitelist options if needed
};

// Create the persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with the persisted reducer
export const store = configureStore({
  reducer: persistedReducer,
});

// Create the persistor (optional, useful for rehydration)
export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
