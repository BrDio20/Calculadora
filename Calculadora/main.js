/* const buttons = document.getElementsByClassName('table-button')
for (const button of buttons) {
  console.log(button.innerText)
  const key = button.innerText // MC
  if(/[0-9]/.test(key)) {    
  } else {
    button.onclick = {
      1: () => {
        const numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
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
*/

function insert(num) {
    const numero = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = numero + num;
}

function clean() {
    document.getElementById('visor').innerHTML = "";
}

function back() {
    const back = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = back.substring(0, back.length - 1);
}

function calculate() {
    const result = document.getElementById('visor').innerHTML;
    if (visor) {
        document.getElementById('visor').innerHTML = eval(result);
    }
}
