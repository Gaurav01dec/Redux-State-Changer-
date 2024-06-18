import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {

  const dispatch = useDispatch() // this will return a dispatch function which wwe (execute) use in our component
  const counter = useSelector(state => state.counter) // automatically setup the subscription

  // now we will create function which executes on onClick
  const incrementHandler = () => {
    dispatch({ type: 'increment' })
  }
  const decrementHandler = () => {
    dispatch({ type: 'decrement' })
  }
  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 5 }) // adding extra payload to the function 
  }

  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>value : {counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment By 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
