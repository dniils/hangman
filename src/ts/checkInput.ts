export function checkInput(s: string): boolean {
  if (!checkInputForEnglishLetter(s)) {
    return false
  }
  return true
}

function checkInputForEnglishLetter(s: string): boolean {
  const valueIsEnglishLetter = /^[a-zA-Z]+$/.test(s.trim())
  if (valueIsEnglishLetter) {
    return true
  }
  return false
}
