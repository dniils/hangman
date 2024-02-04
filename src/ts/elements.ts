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

  const inputWrapperEl = document.createElement('div')
  inputWrapperEl.classList.add('input-wrapper')

  const attemptsBarEl = document.createElement('ul')
  attemptsBarEl.classList.add('attempts')

  const wordContainerEl = document.createElement('ul')
  wordContainerEl.classList.add('word')

  return {
    containerEl,
    formEl,
    inputEl,
    buttonEl,
    errorMsgEl,
    inputWrapperEl,
    attemptsBarEl,
    wordContainerEl,
  }
}

export const el = createElements()
