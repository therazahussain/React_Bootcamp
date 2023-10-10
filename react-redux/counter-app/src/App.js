import { useSelector, useDispatch } from "react-redux"
import {actions} from "./store/index.js"

const App = () => {
  // we call the counter from the store and use it here
  const counter = useSelector((state)=> state.counter);
  // dispatch the function/"""ACTION""" that we want to perform and we can get them in the store and do the functionaly acc to them we define the work here acc to the action
  const dispatch = useDispatch();

  const increament = () => {
    // dispatch({type:'INC'})
    dispatch(actions.increament());
  }

  const decreament = () => {
    // dispatch({type:'DEC'})
    dispatch(actions.decreament());
  }

  const add = () => {
    dispatch(actions.addBy(10));
  }

  return (
    <div>
      <h1>
        Counter App
      </h1>
      <h2>
        Count {counter}
      </h2>
      <button onClick={increament} style={{margin:5}}>+</button>
      <button onClick={decreament} style={{margin:5}}>-</button>
      <button onClick={add} style={{margin:5}}>Add By 100</button>
    </div>
  )
}

export default App