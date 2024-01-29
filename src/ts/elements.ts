function createElements() {
  const containerEl = document.createElement('main')
  containerEl.classList.add('container')

  const formEl = document.createElement('form')
  formEl.setAttribute('action', 'submit')
  formEl.classList.add('form')

  const inputEl = document.createElement('input')
  inputEl.classList.add('input')
  inputEl.setAttribute('maxlength', '1')
  inputEl.setAttribute('name', 'letter')
  inputEl.setAttribute('placeholder', 'a')

  const buttonEl = document.createElement('button')
  buttonEl.classList.add('button')
  buttonEl.setAttribute('type', 'submit')
  buttonEl.textContent = 'Guess'

  const errorMsgEl = document.createElement('span')
  errorMsgEl.classList.add('error-msg')

  return {
    containerEl,
    formEl,
    inputEl,
    buttonEl,
    errorMsgEl,
  }
}

export const el = createElements()
