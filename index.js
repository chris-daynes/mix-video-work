const h = require('hyperscript')
const message = document.createElement('div')

function Todos(listOftodos) {
  return h('div', listOftodos.map((todo) => {
    const customClass = {
      className: todo.done ? 'done': '',

    }
    return h('p', customClass, todo.description)
  }))
}

const state = {
  todo: [
    {description: 'Buy some milk', done: false},
    {description: 'Walk the dog', done: false},
    {description: 'Water the plants', done: true},
  ]
}

const todo = Todos(state.todo)


document.body.appendChild(todo)
