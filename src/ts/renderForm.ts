import { el } from './elements'
import { checkInput } from './checkInput'
import { wordToGuess } from './api'

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

export function renderForm(): void {
  const body = document.querySelector('body')

  el.formEl.append(el.errorMsgEl, el.inputEl, el.buttonEl)
  el.containerEl.append(el.formEl)
  body?.appendChild(el.containerEl)

  el.inputEl.focus()

  el.formEl.addEventListener('submit', (e) => {
    e.preventDefault()

    const inputIsCorrect = checkInput(el.inputEl.value)

    if (el.inputEl.value && !inputIsCorrect) {
      showErrorMessage()
    } else {
      const failedAttempt = !openLetter(wordToGuess)
      hideErrorMessage()
      el.inputEl.value = ''

      if (failedAttempt) {
        // count missed attempt
        console.log('wrong guess!')
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
