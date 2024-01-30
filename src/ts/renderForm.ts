import { el } from './elements'
import { checkInput } from './checkInput'
import { wordToGuess } from './api'
import { MAX_ATTEMPTS } from './constants'

const state = {
  failedAttempts: 0,
  gameStatus: 0,
}

function showErrorMessage(): void {
  el.errorMsgEl.textContent = 'Please, try English letter'
  el.errorMsgEl.classList.add('error-msg_active')
}

function hideErrorMessage(): void {
  el.errorMsgEl.textContent = ''
  el.errorMsgEl.classList.remove('error-msg_active')
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
  el.buttonEl.textContent = 'new game'
  state.gameStatus = 1
}

function handleGameLoss(): void {
  handleGameEnd()
  el.inputEl.value = '💀'
}

function handleGameWin(): void {
  handleGameEnd()
  el.inputEl.value = '😍'
}

function handleWrongAnswer(): void {
  state.failedAttempts += 1

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

  el.formEl.append(el.errorMsgEl, el.inputEl, el.buttonEl)
  el.containerEl.append(el.formEl)
  body?.prepend(el.containerEl)

  el.inputEl.focus()

  el.formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputIsCorrect = checkInput(el.inputEl.value)

    if (el.inputEl.value && !inputIsCorrect) {
      showErrorMessage()
    } else {
      const failedAttempt = !openLetter(wordToGuess) && el.inputEl.value
      hideErrorMessage()
      el.inputEl.value = ''
      checkGameStatus()

      if (failedAttempt) {
        console.log('wrong guess!')
        handleWrongAnswer()
      }
    }
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
