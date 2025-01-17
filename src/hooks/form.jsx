import { useState } from "react";


export function useHandleChange(value) {
  const [state, setState] = useState(value)

  function handleChange(event) {
    if(typeof(value) === 'object') {
      setState({
        ...state,
        [event.target.name]: event.target.value
      })
    } else {
      setState(event.target.value)
    }
  }

  return [state, handleChange]
}