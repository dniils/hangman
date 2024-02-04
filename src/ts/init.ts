import { renderForm } from './renderForm'
import { renderWord } from './renderWord'
import { renderAttemptsBar } from './renderAttemptsBar'
import { getWord } from './getWord'
import { state } from './state'

export async function init(): Promise<void> {
  state.wordToGuess = await getWord()
  renderForm()
  if (state.wordToGuess) renderWord(state.wordToGuess)
  renderAttemptsBar()
}
