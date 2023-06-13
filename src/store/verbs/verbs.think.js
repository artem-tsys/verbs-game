import {createAsyncThunk} from '@reduxjs/toolkit';
import data from '../../assets/db.json';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  return data;
})
