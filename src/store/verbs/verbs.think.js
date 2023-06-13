import {createAsyncThunk} from '@reduxjs/toolkit';
import getAxiosInstance from '../../api/axios-instanse';

export const fetchVerbs = createAsyncThunk('verbs/fetchVerbs', async () => {
  const data = await getAxiosInstance().get('/verbs').then(res => {
      const result = JSON.stringify(res.config)
      // const resultData = JSON.stringify(res.data)
      const resultStatus = JSON.stringify(res.status)
      alert(`resultStatus: ${resultStatus}`)
      alert(`result: ${result}`)
      // alert(`resultData: ${resultData}`)
      return res.data;
    }).catch((err) => {
      alert(`error: ${err} - ${err.statusText}`)
      alert(`error data: ${err.data}`)
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

  return data;
})
