import { getResponseContent, RequestError } from '../../../requests'
import config from './config_smileCleaning'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function FetchSmileCleaning<T> (
  endpoint: string,
  method: HttpMethod,
  data?: unknown,
  refreshToken?: string,
  bearerToken?: string
): Promise<T> {

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer eyJhbGciOiJIM1MzODQiLCJ0eXAiOiJKV1QifQ.eyJlbWFpbCI6InNtaWxlLmNsZWFuaW5nLjEwMStjdXN0MUBnbWFpbC5jb20iLCJzaW5nbGVfYWNjZXNzX3Rva2VuIjoicGg3NXk1S20zMG95NjFab2NJV3MiLCJleHAiOjE3Mjg0MDYxODUsImlzcyI6IkxhdW5jaDI3In0.J2gw71dqCrQaRdp60i3KZAKgyWH5aVrQw1U6C4OBdff86bWyttsHVq_RS8bo2JID`
  }

  // if (refreshToken) {
  //   headers['Cookie'] = `refresh=${refreshToken}`
  // }

  // if (bearerToken) {
    // headers['Authorization'] = `Bearer ${bearerToken}`
  // }

  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    // credentials: 'include',
    headers,
    body: method !== 'GET' ? JSON.stringify(data) : undefined
  })

  const content = await getResponseContent(response) as T
  
  if (response.ok) return { ...content }
  throw new RequestError(response.statusText, response.status, content)
}

export default FetchSmileCleaning
