type Elements = ReturnType<typeof createElements>

function createElements() {
  const containerEl: HTMLElement = document.createElement('main')
  containerEl.classList.add('container')

  const formEl: HTMLFormElement = document.createElement('form')
  formEl.setAttribute('action', 'submit')
  formEl.classList.add('form')

  const inputEl: HTMLInputElement = document.createElement('input')
  inputEl.classList.add('input')
  inputEl.setAttribute('maxlength', '1')
  inputEl.setAttribute('name', 'letter')
  inputEl.setAttribute('placeholder', 'a')

  const buttonEl: HTMLButtonElement = document.createElement('button')
  buttonEl.classList.add('button')
  buttonEl.setAttribute('type', 'submit')
  buttonEl.textContent = 'Guess'

  const errorMsgEl: HTMLSpanElement = document.createElement('span')
  errorMsgEl.classList.add('error-msg')

  const inputWrapperEl: HTMLDivElement = document.createElement('div')
  inputWrapperEl.classList.add('input-wrapper')

  const attemptsBarEl: HTMLUListElement = document.createElement('ul')
  attemptsBarEl.classList.add('attempts')

  const wordContainerEl: HTMLUListElement = document.createElement('ul')
  wordContainerEl.classList.add('word')

  const wrongAnswerAudioEl: HTMLAudioElement = document.createElement('audio')
  wrongAnswerAudioEl.setAttribute('src', 'src/assets/sound/wrongAnswer.wav')

  const correctAnswerAudioEl: HTMLAudioElement = document.createElement('audio')
  correctAnswerAudioEl.setAttribute('src', 'src/assets/sound/correctAnswer.wav')

  const applauseAudioEl: HTMLAudioElement = document.createElement('audio')
  applauseAudioEl.setAttribute('src', 'src/assets/sound/applause.wav')

  const loseAudioEl: HTMLAudioElement = document.createElement('audio')
  loseAudioEl.setAttribute('src', 'src/assets/sound/lose.wav')

  return {
    containerEl,
    formEl,
    inputEl,
    buttonEl,
    errorMsgEl,
    inputWrapperEl,
    attemptsBarEl,
    wordContainerEl,
    correctAnswerAudioEl,
    wrongAnswerAudioEl,
    applauseAudioEl,
    loseAudioEl,
  }
}

export const el: Elements = createElements()
