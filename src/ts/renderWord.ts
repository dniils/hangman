import { el } from './elements'

export function renderWord(word: string) {
  const wordArr = word.split('')

  const wordContainerEl = document.createElement('ul')
  wordContainerEl.classList.add('word')

  wordArr.forEach((letter) => {
    const letterElWrapper = document.createElement('li')
    const letterElAfterEl = document.createElement('span')
    const letterEl = document.createElement('span')
    letterElWrapper.classList.add('word__letter-wrapper')
    letterElAfterEl.classList.add('word__letter-after')
    letterEl.classList.add('word__letter')
    // letterEl.textContent = letter

    letterElWrapper.append(letterEl, letterElAfterEl)
    wordContainerEl.appendChild(letterElWrapper)
  })

  el.containerEl.prepend(wordContainerEl)
}
