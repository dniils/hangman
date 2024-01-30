import { el } from './elements'
import { MAX_ATTEMPTS } from './constants'

export function renderAttemptsBar(): void {
  for (let i = 0; i <= MAX_ATTEMPTS - 1; i++) {
    const attemptLiEl = document.createElement('li')
    attemptLiEl.classList.add('attempts__item')
    el.attemptsBarEl.appendChild(attemptLiEl)
  }

  el.containerEl.prepend(el.attemptsBarEl)
}
