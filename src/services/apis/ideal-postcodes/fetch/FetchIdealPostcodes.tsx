'use client'

import config from './config_fetchIdealPostcodes'
import { getResponseContent, RequestError } from '../../../requests'

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE'

async function FetchIdealPostcodes<T>(
  endpoint: string,
  method: HttpMethod,
  data?: unknown
): Promise<T> {
  
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    Authorization: `api_key="${config.API_KEY}"`,
    Accept: 'application/json',
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

export default FetchIdealPostcodes
