const morph = require('morphdom')

const greeting = require('./greetingTemplate')


const state = {
  name: 'Chris'
}

const view = greeting(state.name, changeOnClick)


function changeOnClick() {
  state.name = 'Ella and Jon'
  const newView = greeting(state.name)
  morph(view, newView)
}

document.body.appendChild(view)
