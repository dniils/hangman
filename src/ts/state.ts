interface StateI {
  failedAttempts: number
  gameStatus: number
  wordToGuess: string | undefined
  guessedLetters: string[]
}

export const state: StateI = {
  failedAttempts: 0,
  gameStatus: 0,
  wordToGuess: undefined,
  guessedLetters: [],
}
