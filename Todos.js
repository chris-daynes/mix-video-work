const h = require('hyperscript')

module.exports = Todos


function Todos(listOftodos, clickHandler) {
  return h('div', listOftodos.map((todo, index) => {
    return Todo(todo, index, clickHandler)
  }))

  function Todo(todoItem, index, clickHandler) {
    const { done, description } = todoItem
    const customClass = {
      className: done ? 'done': '',
      onclick: () => clickHandler(index)
    }
    return h('p', customClass, `[${index}] ${description}`)
  }
}
