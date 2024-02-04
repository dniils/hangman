import { el } from './elements'

export function renderWord(word: string) {
  word.split('').forEach(() => {
    const letterElWrapper = document.createElement('li')
    const letterElAfterEl = document.createElement('span')
    const letterEl = document.createElement('span')
    letterElWrapper.classList.add('word__letter-wrapper')
    letterElAfterEl.classList.add('word__letter-after')
    letterEl.classList.add('word__letter')

    letterElWrapper.append(letterEl, letterElAfterEl)
    el.wordContainerEl.appendChild(letterElWrapper)
  })

  el.containerEl.insertBefore(el.wordContainerEl, el.formEl)
}
