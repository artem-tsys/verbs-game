import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import qs from 'qs';

function useAxiosErrors(error) {
  if (error?.response?.status === 401) {
    window.location.href = `/`
    return null
  }
  throw error
}

function defaultTransformers(transformRequest) {
  if (!transformRequest) {
    return []
  }
  if (transformRequest instanceof Array) {
    return transformRequest
  }
  return [transformRequest]
}

export const axiosInstance = axios.create({
  baseURL: process.env.PUBLIC_URL,
  timeout: 1000,
  transformRequest: [
    (data) => {
      if (data instanceof FormData) {
        return data
      }
      return decamelizeKeys(data)
    },
    ...defaultTransformers(axios.defaults.transformRequest),
  ],
  transformResponse: [
    ...defaultTransformers(axios.defaults.transformResponse),
    (data) => camelizeKeys(data),
  ],
  paramsSerializer: (params) =>
    qs.stringify(decamelizeKeys(params), {
      skipNulls: true,
    }),
})

axiosInstance.interceptors.response.use((response) => response, useAxiosErrors)

function getAxiosInstance() {
  return axiosInstance
}

export default getAxiosInstance
