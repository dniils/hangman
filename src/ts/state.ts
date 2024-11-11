import { StateI } from '../types/StateI'

export const state: StateI = {
  failedAttempts: 0,
  gameStatus: 0,
  wordToGuess: undefined,
  guessedLetters: [],
}
