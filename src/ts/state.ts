interface StateI {
  failedAttempts: number
  gameStatus: number
  wordToGuess: string | undefined
}

export const state: StateI = {
  failedAttempts: 0,
  gameStatus: 0,
  wordToGuess: undefined,
}
