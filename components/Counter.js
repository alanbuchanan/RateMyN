import React from 'react'

const Counter = (props) => {
  return (
    <div>
      <button onClick={props.increment}>+</button>
      <div>{props.store.getState()}</div>
      <button onClick={props.decrement}>-</button>
    </div>
  )
}

export default Counter