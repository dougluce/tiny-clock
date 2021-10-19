const moment = require('moment')

let last = ""

function startTime() {
  const current = moment().format(`ddd HH:mm:ss`)
  if (current != last) {
    last = current
    const time = document.getElementById('time')
    time.innerHTML = `<span>${current}</span>`
  }
  requestAnimationFrame(startTime)
}

requestAnimationFrame(startTime)
