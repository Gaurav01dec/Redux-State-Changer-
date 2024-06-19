import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { counterActions } from '../store';

const Counter = () => {

  const dispatch = useDispatch() // this will return a dispatch function which wwe (execute) use in our component
  const counter = useSelector(state => state.counter.counter) // automatically setup the subscription
  const toggle = useSelector(state => state.counter.showToggle) // automatically setup the subscription

  // now we will create function which executes on onClick
  const incrementHandler = () => {
    // dispatch({ type: 'increment' })
    dispatch(counterActions.increment())
  }
  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }
  const increaseHandler = () => {
    dispatch(counterActions.increase(5)) //{type:SOME_UNIQUE_IDENTIFIER, payload:10}
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>value : {counter}</div>}
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
