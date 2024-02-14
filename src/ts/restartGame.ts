import { clearAttemptsBar } from './clearAttemptsBar'
import { clearUsedLetters } from './clearUsedLetters'
import { el } from './elements'
import { getWord } from './getWord'
import { renderWord } from './renderWord'
import { state } from './state'

export async function restartGame() {
  state.failedAttempts = 0
  state.gameStatus = 0
  state.guessedLetters = []
  el.inputEl.value = ''

  el.inputEl.classList.remove('input_error')
  el.errorMsgEl.classList.remove('error-msg_active')
  el.buttonEl.textContent = 'Guess'
  el.wordContainerEl.innerHTML = ''

  state.wordToGuess = await getWord()

  if (state.wordToGuess) {
    renderWord(state.wordToGuess)
  }

  el.inputEl.disabled = false
  el.inputEl.focus()

  clearAttemptsBar()
  clearUsedLetters()
}
