import {createAsyncThunk} from '@reduxjs/toolkit';
import getAxiosInstance from '../../api/axios-instanse';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  const instance = getAxiosInstance();
  const data = await instance.get('/verbs')
    .then(res => res.data)
    .catch((err) => {
      alert(`error: ${err.status} - ${err.message}`)
      throw new Error(err.message)
    })
  // const data = await fetch( `${process.env.PUBLIC_URL}/verbs`)
  //   .then(res => res.json())
  //   .then(res => {
  //     alert(JSON.stringify(res));
  //     return res;
  //   })
  //   .catch((err) => {
  //     alert(`error: ${err.status} - ${err.message}`)
  //     throw new Error(err.message)
  //   })
  alert(JSON.stringify(data));
  return data;
})
