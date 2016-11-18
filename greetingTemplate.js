const h = require('hyperscript')


const greeting = (name, handleClick) => {
  return h('div',
    {onclick: handleClick},
    `Hello ${name}`
  )
}

module.exports = greeting
