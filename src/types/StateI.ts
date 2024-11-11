export interface StateI {
  failedAttempts: number
  gameStatus: number
  wordToGuess: string | undefined
  guessedLetters: string[]
}
