import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload.loading;
    },
  },
});

export const { setLoading } = articleSlice.actions;

export const selectArticle = (state) => state.article;

export default articleSlice.reducer;
