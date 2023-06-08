import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  let data
  console.log("fetchVerbs init");
  await fetch('http://localhost:3005/verbs')
    .then(res => res.json())
    .then((res) => {
      data = res;
    })
    .catch((err) => {
      throw new Error(err.message)
    })


  return data;
})
