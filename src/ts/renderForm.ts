import { el } from './elements'
import { checkInput } from './checkInput'

function showErrorMessage(): void {
  el.errorMsgEl.textContent = 'Please, try English letter'
  el.errorMsgEl.classList.add('error-msg_active')
}

function hideErrorMessage(): void {
  el.errorMsgEl.textContent = ''
  el.errorMsgEl.classList.remove('error-msg_active')
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
    el.inputEl.value && !inputIsCorrect
      ? showErrorMessage()
      : hideErrorMessage()
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
