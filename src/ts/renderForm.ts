import { el } from './elements'
import { checkInput } from './checkInput'
import { wordToGuess } from './api'
import { MAX_ATTEMPTS } from './constants'
import { restartGame } from './restartGame'
import { state } from './state'

function showErrorMessage(): void {
  el.errorMsgEl.textContent = 'Please, try English letter'
  el.errorMsgEl.classList.add('error-msg_active')
  el.inputEl.classList.add('input_error')
}

function hideErrorMessage(): void {
  el.errorMsgEl.textContent = ''
  el.errorMsgEl.classList.remove('error-msg_active')
  el.inputEl.classList.remove('input_error')
}

function openLetter(word: string[]): boolean {
  // TODO: check for already opened letters
  const wordLetters = Array.from(document.querySelectorAll('.word__letter'))
  const letterValue = el.inputEl.value
  const matches: boolean[] = []

  word.forEach((letter, index) => {
    if (letterValue === letter) {
      wordLetters[index].textContent = letter
      matches.push(true)
    } else {
      matches.push(false)
    }
  })

  if (matches.some((el) => el === true)) {
    return true
  } else {
    return false
  }
}

function checkGameStatus() {
  const word = Array.from(document.querySelectorAll('.word__letter'))
    .map((el) => el.textContent)
    .join('')

  if (state.failedAttempts === MAX_ATTEMPTS) {
    console.log('you lost')
    handleGameLoss()
  } else if (word === wordToGuess.join('')) {
    console.log('you won')
    handleGameWin()
  }
}

function handleGameEnd(): void {
  el.inputEl.disabled = true
  el.buttonEl.textContent = 'New game'
  el.errorMsgEl.classList.remove('error-msg_active')
  state.gameStatus = 1
}

function handleGameLoss(): void {
  if (state.gameStatus) {
    restartGame()
  } else {
    handleGameEnd()
    el.inputEl.value = '💀'
  }
}

function handleGameWin(): void {
  if (state.gameStatus) {
    restartGame()
  } else {
    handleGameEnd()
    el.inputEl.value = '😍'
  }
}

function handleWrongAnswer(): void {
  state.failedAttempts++

  const attemptLiEls = Array.from(document.querySelectorAll('.attempts__item'))

  for (const li of attemptLiEls) {
    if (!li.classList.contains('attempts__item_active')) {
      li.classList.add('attempts__item_active')
      break
    }
  }
}

export function renderForm(): void {
  const body = document.querySelector('body')

  el.inputWrapperEl.append(el.errorMsgEl, el.inputEl)
  el.formEl.append(el.inputWrapperEl, el.buttonEl)
  el.containerEl.append(el.formEl)
  body?.prepend(el.containerEl)

  el.inputEl.focus()

  el.formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputIsCorrect = checkInput(el.inputEl.value)

    if (el.inputEl.value) {
      if (inputIsCorrect) {
        const failedAttempt = !openLetter(wordToGuess) && el.inputEl.value
        hideErrorMessage()
        el.inputEl.value = ''

        if (failedAttempt) {
          console.log('wrong guess!')
          handleWrongAnswer()
        }
      } else {
        showErrorMessage()
      }
    }

    checkGameStatus()
  })

  el.inputEl.addEventListener('focus', () => {
    hideErrorMessage()
  })

  el.inputEl.addEventListener('input', () => {
    const inputIsCorrect = checkInput(el.inputEl.value)

    el.inputEl.value && !inputIsCorrect
      ? showErrorMessage()
      : hideErrorMessage()
  })
}
