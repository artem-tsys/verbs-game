import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  let data
  await fetch( `${process.env.PUBLIC_URL}/verbs`)
    .then(res => res.json())
    .then((res) => {
      data = res;
    })
    .catch((err) => {
      throw new Error(err.message)
    })

  return data;
})