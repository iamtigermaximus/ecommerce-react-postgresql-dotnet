import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../redux/store';
import { AxiosError } from 'axios';
import axiosInstance from '../../common/axiosInstance';
import { IUserRegister } from '../../types/auth';

export interface AuthCreds {
  email: string;
  password: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  initials: string;
  token: string;
  cart: [];
}

export interface AuthState {
  loggedIn: boolean;
  userInfo: User | null;
  error: boolean;
  errorMsg: string;
  isRegistered: boolean;
  userCartItems: [];
}

const initialState: AuthState = {
  loggedIn: false,
  userInfo: null,
  error: false,
  errorMsg: '',
  isRegistered: false,
  userCartItems: [],
};

export const registerUser = createAsyncThunk(
  'registerUser',
  async (user: IUserRegister) => {
    try {
      const initials = user.name
        .split(' ')
        .map((name) => name[0].toUpperCase())
        .join('');

      const UserResponse = await axiosInstance.post('/Users', {
        ...user,
        initials: initials,
      });

      const data = UserResponse.data;
      return data;
    } catch (e) {
      const error = e as AxiosError;
      return error;
    }
  }
);

export const loginUser = createAsyncThunk<
  User,
  AuthCreds,
  { rejectValue: { error: boolean; errorMsg: string } }
>('auth/loginUser', async (credentials, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post<any>('/Auths', credentials);
    const { data, success, message } = response.data;

    if (success) {
      const { token, userId, name, email, initials } = data;

      const user: User = {
        id: userId.toString(),
        name,
        email,
        initials,
        token,
        cart: [],
      };

      return user;
    } else {
      throw new Error(message || 'Authentication failed');
    }
  } catch (error: any) {
    return rejectWithValue({
      error: true,
      errorMsg: error.message || 'Authentication failed',
    });
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setRegistered: (state) => {
      state.isRegistered = true;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loggedIn = true;
      state.userInfo = action.payload;
      state.error = false;
      state.errorMsg = '';
      state.isRegistered = true;

      if (state.loggedIn) {
        const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        state.userCartItems = cartItems;
      } else {
        // Clear the cart items from Redux store if the user is not logged in
        state.userCartItems = [];
      }
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loggedIn = false;
      state.userInfo = null;
      state.error = true;
      state.errorMsg = action.payload;
      state.isRegistered = false;
      state.userCartItems = [];
    },
    logout: (state) => {
      state.loggedIn = false;
      state.userInfo = null;
      state.error = false;
      state.errorMsg = '';
      state.userCartItems = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.loggedIn = true;
      state.userInfo = action.payload;
      state.error = false;
      state.errorMsg = '';
    });
    builder.addCase(loginUser.rejected, (state, action) => {
      if (action.payload) {
        state.error = action.payload.error;
        state.errorMsg = action.payload.errorMsg;
      } else {
        state.error = true;
        state.errorMsg = 'An error occurred during login';
      }
    });
  },
});

export const { loginSuccess, loginFailure, logout, setRegistered } =
  authSlice.actions;
export const selectLoggedIn = (state: RootState) => state.auth.loggedIn;
export const selectUser = (state: RootState) => state.auth.userInfo;
export const selectError = (state: RootState) => state.auth.error;
export const selectErrorMessage = (state: RootState) => state.auth.errorMsg;

export default authSlice.reducer;
