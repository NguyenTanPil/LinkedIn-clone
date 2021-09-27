import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  photo: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {
    setUserLoginDetial(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.photo = action.payload.photo;
    },

    setSignOutState(state) {
      state.name = null;
      state.email = null;
      state.photo = null;
    },
  },
});

export const { setUserLoginDetial, setSignOutState } = userSlice.actions;

export const selectUser = (state) => state.user;

export default userSlice.reducer;
