import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  articles: [],
};

const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {
    setLoading(state, action) {
      state.loading = action.payload.loading;
    },
    setArticles(state, action) {
      state.articles = action.payload.articles;
    },
  },
});

export const { setLoading, setArticles } = articleSlice.actions;

export const selectArticle = (state) => state.article;

export default articleSlice.reducer;
