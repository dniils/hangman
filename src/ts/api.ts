import { ResponseI } from '../types/ResponseI'

const API_KEY: string = 'bT7VhseYAQChTlCWG75bpA==3M3r9NmSu2MXjjd3'
const API_URL: string = 'https://api.api-ninjas.com/v1/randomword?type=noun'

export async function fetchWord(): Promise<ResponseI | undefined> {
  try {
    const response = await fetch(API_URL, {
      method: 'GET',
      headers: {
        'X-Api-Key': API_KEY,
        'Content-Type': 'application/json',
      },
    })

    if (!response.ok) {
      throw new Error(`${response.status}`)
    }

    const result: ResponseI = await response.json()
    return result
  } catch (error) {
    console.error('Error:', error)
  }
}
