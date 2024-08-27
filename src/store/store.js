import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import userReducer from './userSlice';
import cartReducer from './cartSlice';

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user', 'cart'], // Persist both user and cart
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
