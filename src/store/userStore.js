import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';


// Combine reducers if you have more than one
const rootReducer = combineReducers({
  user: userReducer,
});

// Configure persist
const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the store with persisted reducer
export const userStore = configureStore({
  reducer: persistedReducer,
});

// Persistor to manage persistence
export const persistor = persistStore(store);
