import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  const data = await fetch( `${process.env.PUBLIC_URL}/verbs`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not OK');
      }
      return response.json();
    })
    .catch((err) => {
      throw new Error(err.message)
    })

  return data;
})
