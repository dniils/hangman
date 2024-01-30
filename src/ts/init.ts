import { renderForm } from './renderForm'
import { renderWord } from './renderWord'
import { wordToGuess } from './api'
import { renderAttemptsBar } from './renderAttemptsBar'

export function init(): void {
  renderForm()
  renderWord(wordToGuess)
  renderAttemptsBar()
}
