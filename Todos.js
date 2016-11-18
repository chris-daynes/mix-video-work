const h = require('hyperscript')

module.exports = Todos


function Todos(listOftodos, dispatch) {
  return h('div', listOftodos.map((todo, index) => {
    return Todo(todo, index, dispatch)
  }))

  function Todo(todoItem, index, dispatch) {
    const { done, description } = todoItem
    const customClass = {
      className: done ? 'done': '',
      onclick: () => dispatch({type: 'TOGGLE_DONE', payload: index})
    }
    return h('p', customClass, `[${index}] ${description}`)
  }
}
