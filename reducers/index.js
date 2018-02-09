function counter (state = 0, action) {
  switch (action.type) {
    case 'INCREMENT':
      console.warn("inc")
      return state + 1
    case 'DECREMENT':
      console.warn("dec")
      return state - 1
    default:
      return 0
  }
}

export {
  counter
}