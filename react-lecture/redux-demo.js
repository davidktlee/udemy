const redux = require('redux')

const reducer = (state, action) => {
  return {
    counter: state.counter + 1,
  }
}

const store = redux.createStore(reducer)

const stateSubscribe = () => {
  const res = store.getState()
  console.log(res)
}
store.subscribe(stateSubscribe)
