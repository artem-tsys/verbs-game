import {createSlice} from '@reduxjs/toolkit';
import {fetchVerbs} from './verbs.think';

const initialState = {
  loadingStatus: 'idle',
  error: null,
  verbs: [],
  types: [],
};

export const verbsSlice = createSlice({
  name: 'verbs',
  initialState: initialState,
  reducers: {
    setVerbs: (state, {payload}) => {
      state.verbs = payload
    },
    setTypes: (state, {payload}) => {
      state.types = payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchVerbs.pending, state => {
        state.loadingStatus = 'pending';
        state.error = null;
      })
      .addCase(fetchVerbs.fulfilled , (state, {payload}) => {
        state.verbs = payload.verbs
        state.types = payload.types
      })
      .addCase(fetchVerbs.rejected, (state, action) => {
        state.loadingStatus = 'failed';
        state.error = action.error.message ?? 'error';
      });
  }
})
