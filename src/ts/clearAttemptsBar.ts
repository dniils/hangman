import { el } from './elements'

export function clearAttemptsBar(): void {
  Array.from(Array.from(el.attemptsBarEl.childNodes) as HTMLElement[]).forEach(
    (el) => {
      if (el.classList.contains('attempts__item_active')) {
        el.classList.remove('attempts__item_active')
      }
    }
  )
}
