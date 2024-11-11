import { renderForm } from './renderForm'
import { renderWord } from './renderWord'
import { renderAttemptsBar } from './renderAttemptsBar'
import { getWord } from './getWord'
import { state } from './state'
import { el } from './elements'

export async function init(): Promise<void> {
  state.wordToGuess = await getWord()

  if (state.wordToGuess) {
    renderForm()
    renderWord(state.wordToGuess)
    renderAttemptsBar()
    el.wrongLettersContainerEl.appendChild(el.wrongLettersEl)
    el.gameContainerEl.prepend(el.wrongLettersContainerEl)
  } else {
    // TODO: show error message in interface
  }
}
