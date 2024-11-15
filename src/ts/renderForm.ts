import { el } from './elements'
import { checkInput } from './checkInput'
import { MAX_ATTEMPTS } from './constants'
import { restartGame } from './restartGame'
import { state } from './state'
import { playSound } from './playSound'
import { addAnimation } from './addAnimation'

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

function openLetter(word: string): boolean {
  // TODO: check for already opened letters
  const wordLetters = Array.from(document.querySelectorAll('.word__letter'))
  const letterValue = el.inputEl.value.toLowerCase()
  const matches: boolean[] = []

  word.split('').forEach((letter, index) => {
    if (letterValue === letter) {
      wordLetters[index].textContent = letter
      matches.push(true)
      if (!state.guessedLetters.includes(letter)) {
        state.guessedLetters.push(letter)
      }
      playSound(el.correctAnswerAudioEl)
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

function colorUnguessedLetter(el: HTMLSpanElement) {
  el.classList.add('word__letter_unguessed')
}

function showWord(): void {
  const wordLetters: HTMLSpanElement[] = Array.from(
    document.querySelectorAll('.word__letter')
  )
  state.wordToGuess?.split('').forEach((letter, index) => {
    wordLetters[index].textContent = letter
    if (!state.guessedLetters.includes(letter)) {
      colorUnguessedLetter(wordLetters[index])
    }
  })
}

function checkGameStatus() {
  const word = Array.from(document.querySelectorAll('.word__letter'))
    .map((el) => el.textContent)
    .join('')

  if (state.failedAttempts === MAX_ATTEMPTS) {
    handleGameLoss()
  } else if (state.wordToGuess && word === state.wordToGuess) {
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
    playSound(el.loseAudioEl)
    showWord()
  }
}

function handleGameWin(): void {
  if (state.gameStatus) {
    restartGame()
  } else {
    handleGameEnd()
    el.inputEl.value = '😍'
    playSound(el.applauseAudioEl)
  }
}

function handleWrongAnswer(): void {
  state.failedAttempts++
  playSound(el.wrongAnswerAudioEl)
  addAnimation(el.wordContainerEl, 'wrong-answer-animation')

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
  el.gameContainerEl.append(el.formEl)
  el.containerEl.appendChild(el.gameContainerEl)
  body?.prepend(el.containerEl)

  el.inputEl.focus()

  el.formEl.addEventListener('submit', (e) => {
    e.preventDefault()
    const inputIsCorrect = checkInput(el.inputEl.value)

    if (el.inputEl.value) {
      if (inputIsCorrect) {
        const failedAttempt =
          state.wordToGuess &&
          !openLetter(state.wordToGuess) &&
          el.inputEl.value
        hideErrorMessage()

        if (failedAttempt) {
          const wrongLetterAlreadyUsed =
            el.wrongLettersEl.textContent?.includes(el.inputEl.value)

          if (wrongLetterAlreadyUsed) {
            addAnimation(el.wrongLettersContainerEl, 'attention-animation')
          } else {
            el.wrongLettersEl.textContent += el.inputEl.value
            handleWrongAnswer()
          }
        }

        el.inputEl.value = ''
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
