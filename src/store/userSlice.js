import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    userInfo: null,
    isLoggedIn: false,
  },
  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
      state.isLoggedIn = true;
    },
    clearUser: (state) => {
      state.userInfo = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.userInfo;
export const selectIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
