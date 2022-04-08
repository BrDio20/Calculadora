const visorElement = document.getElementById('visor')
const buttons = document.getElementsByClassName('table-button')
// 
function insert(char = '') {
  visorElement.innerText = visorElement.innerText + char
}
function clear() {
  visorElement.innerText = ''
}
function backspace() {
  visorElement.innerText = visorElement.innerText.slice(0, -1)
}
function resultCalculate() {
  const result = eval(visorElement.innerText)
  visorElement.innerText = result
  return result
}
function divideOnePerX() {
  visorElement.innerText = 1 / resultCalculate()
}
//
for (const button of buttons) {
  const key = button.innerText
  button.onclick = {
    '←': backspace,
    C: clear,
    '=': resultCalculate,
    '1/x': divideOnePerX
  }[key] || (() => insert(key))
}
