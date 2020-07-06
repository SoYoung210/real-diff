import axios, { AxiosInstance } from 'axios'
export enum FetchStatusCode {
  DEFAULT = -1,
  LOADING = 99,
  OK = 200,
  FORBIDDEN = 403,
  UNAUTHORIZED = 401,
  UNKNOWN = 500,
  NOT_FOUND = 404,
}

const axiosInstance = (token: string): AxiosInstance => {
  const headers = {
    Accept: 'application/json',
    Pragma: 'no-cache',
    Authorization: token,
  }

  return axios.create({
    baseURL: 'https://api.github.com',
    headers,
  })
}

export const pullRequestAPI = async (token: string , url: string) => {
  try {
    const { data } = await axiosInstance(token).get(url)

    return data
  } catch (error) {
    throw error
  }
}
