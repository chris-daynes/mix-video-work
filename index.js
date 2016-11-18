
const morph = require('morphdom')

const Todos = require('./Todos')


const message = document.createElement('div')


const state = {
  todos: [
    {description: 'Buy some milk', done: false},
    {description: 'Walk the dog', done: false},
    {description: 'Water the plants', done: false},
  ]
}

const initialState = Todos(state.todos, toggleDone)

function toggleDone(index) {
  state.todos[index].done = !state.todos[index].done
  const newState = Todos(state.todos)
  morph(initialState, newState)
}




document.body.appendChild(initialState)
