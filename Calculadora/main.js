const buttons = document.getElementsByClassName('table-button')
for (const button of buttons) {
  console.log(button.innerText)
  const key = button.innerText // MC
  if(/[0-9]/.test(key)) {
    
  } else {
    button.onclick = {
      1: () => {
        console.log(1)
      },
      2: () => {
        console.log(2)
      },
      3: () => {
        console.log(3)
      },
      MC: () => {
        console.log('MC')
      },
      CE: () => {
  
      }
    }[key]
  }
}