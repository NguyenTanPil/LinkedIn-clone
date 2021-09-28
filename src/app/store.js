import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    user: userReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middlware: [thunk],
});
