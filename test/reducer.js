const test = require('tape');
const freeze = require('deep-freeze');
const reducer = require('../reducer');


test('hello world test', (t) => {
  t.ok(true)
  t.end()
})

test('That TOGGLE_DONE toggles todo', (t) => {
  //arrange
  const state = {
    todos: [
      {description: 'Buy some milk', done: false},
      {description: 'Walk the dog', done: false},
      {description: 'Water the plants', done: false},
    ]
  }
  freeze(state)
  const actual = {
    todos: [
      {description: 'Buy some milk', done: false},
      {description: 'Walk the dog', done: false},
      {description: 'Water the plants', done: true},
    ]
  }

  //act
  const expected = reducer(state, {type: 'TOGGLE_DONE', payload: 2})

  //assert
  t.deepEqual(actual, expected, 'The TOGGLE_DONE function succesfully toggles the todo.')
  t.end()
})
