import { el } from './elements'
import { getWord } from './getWord'
import { renderWord } from './renderWord'
import { state } from './state'

function clearAttemptsBar(): void {
  Array.from(Array.from(el.attemptsBarEl.childNodes) as HTMLElement[]).forEach(
    (el) => {
      if (el.classList.contains('attempts__item_active')) {
        el.classList.remove('attempts__item_active')
      }
    }
  )
}

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
}
