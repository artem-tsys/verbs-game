import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  const data = await fetch( `${process.env.PUBLIC_URL}/verbs`).then(res => {
      if (!res.ok) {
        throw new Error('Network response was not OK');
      }
      return res.json();
    }).then(res => {
      return res
    })
    .catch((err) => {
      alert(`error: ${err.status} - ${err.message}`)
      throw new Error(err.message)
    })
  alert(JSON.stringify(data));
  return data;
})
