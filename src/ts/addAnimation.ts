export function addAnimation(el: Element, animationClass: string): void {
  el.classList.add(animationClass)
  setTimeout(() => el.classList.remove(animationClass), 400)
}
