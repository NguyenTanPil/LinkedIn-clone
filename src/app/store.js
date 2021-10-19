import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import articleReducer from '../features/article/articleSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    user: userReducer,
    article: articleReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: false,
    }),
    thunk,
  ],
});
