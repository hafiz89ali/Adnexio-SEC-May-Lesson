import { useState, useEffect } from "react";
import Header from "../components/Header";
import "../styling/CounterStyling.css";

function Counter() {
  // For the best practice, state always use constant to store the value of the state
  const [counter, setCounter] = useState(0);

  // Increament is achieved by setting the counter to the current value of the counter plus 1
  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  // Create a function which monitor the counter value, whenever the counter value more than 10, alert a message to user that the counter value is more than 10.
  // useEffect(a,b)
  // a: function to run when the state change
  // b: state to run the function is form of array
  useEffect(
    function () {
      if (counter === 10) {
        // Mount react lifecycle
        alert("10 mounted");
        // Unmount react lifecycle
        return function () {
          alert("10 unmounted");
        };
      }
    },
    [counter]
  );

  return (
    <div>
      <Header />
      <div className="body">
        <div className="hero">
          <h1>Counter</h1>
        </div>
        <div className="counter">
          <div className="counterButton">
            <h2>{counter}</h2>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
          </div>
          <div>
            <label for="file">Progress</label>
            <progress id="file" value={counter} max="100">
              {counter}%
            </progress>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;
