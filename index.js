import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { counter } from './reducers'
import CounterContainer from './containers/CounterContainer'

const store = createStore(counter, window.__REDUX_DEVTOOLS_EXTENSION__())

const render = () => ReactDOM.render(<CounterContainer store={store}/>, document.getElementById('root'))
store.subscribe(render)
render()
