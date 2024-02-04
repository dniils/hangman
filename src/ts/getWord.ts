import { ResponseI } from '../types/ResponseI'
import { fetchWord } from './api'

export async function getWord(): Promise<string | undefined> {
  const wordToGuess: ResponseI | undefined = await fetchWord()
  return wordToGuess?.word.toLowerCase().trim()
}
