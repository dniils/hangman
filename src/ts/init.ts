import { renderForm } from './renderForm'
import { renderWord } from './renderWord'
import { wordToGuess } from './api'

export function init(): void {
  renderForm()
  renderWord(wordToGuess)
}
