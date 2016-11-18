
const morph = require('morphdom')

const Todos = require('./Todos')
const reducer = require('./reducer');


const message = document.createElement('div')


const state = {
  todos: [
    {description: 'Buy some milk', done: false},
    {description: 'Walk the dog', done: false},
    {description: 'Water the plants', done: false},
  ]
}

const initialState = Todos(state.todos, dispatch)
document.body.appendChild(initialState)

function dispatch(action) {
  state = reducer(state, action)
  const newState = Todos(state.todos)
  morph(initialState, newState)
}
