import config from './config_smileCleaning'
import { getResponseContent, RequestError } from '../../../requests'

import { getSession } from "next-auth/react"
import { getToken } from "next-auth/jwt";

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function FetchSmileCleaning<T>(
  endpoint: string,
  method: HttpMethod,
  data?: unknown
): Promise<T> {
  
  const isServer = typeof window === 'undefined';
  let session;

  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }

  if (!isServer) {
    session = await getSession();
    headers["Authorization"] = `Bearer ${session?.token}`
  }

  const response = await fetch(`${config.API_URL}/${endpoint}`, {
    method,
    headers,
    body: method !== 'GET' ? JSON.stringify(data) : undefined
  })

  const content = await getResponseContent(response) as T

  if (response.ok) return { ...content }
  throw new RequestError(response.statusText, response.status, content)
}

export default FetchSmileCleaning
