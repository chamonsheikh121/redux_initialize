import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  decrement,
  increment,
  increment_by_amount,
} from "./redux/counter/counter_slice";
import { App_use_dispatch, App_use_selector } from "./redux/utils/utils";
import { useRef } from "react";
import { multiply, substraction, sum } from "./redux/counter/calculation_slice";

function App() {
  const value = App_use_selector((state) => state.counters.count);
  const calculatedValue = App_use_selector((state) => state.calculator.value);
  const dispatch = App_use_dispatch();

  const inputRef = useRef(null);

  console.log(inputRef);

  const handle_increment = () => {
    console.log("i");
    dispatch(increment());
  };
  const handle_decrement = () => {
    dispatch(decrement());
  };

  const sumHandler = () => {
    const number = { input_value: Number(inputRef.current.value) };
    dispatch(sum(number));
    inputRef.current.value = "";
  };
  const substraction_Handler = () => {
    const number = { input_value: Number(inputRef.current.value) };
    dispatch(substraction(number));
    inputRef.current.value = "";
  };
  const multiplyHandler = () => {
    const number = { input_value: Number(inputRef.current.value) };
    dispatch(multiply(number));
    inputRef.current.value = "";
  };

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handle_increment}>Increment</button>
        <button onClick={() => dispatch(increment_by_amount(5))}>
          Increment by 5
        </button>
        <p>count is{value}</p>
        <button onClick={handle_decrement}>decrement</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white shadow-lg rounded-2xl p-6 w-80 text-center">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Mini Calculator
          </h2>

          <input
            ref={inputRef}
            type="number"
            placeholder="Enter a number"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none mb-4"
          />

          <div className="flex justify-center gap-3 mb-4">
            <button
              onClick={sumHandler}
              className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition"
            >
              +
            </button>
            <button
              onClick={substractionHandler}
              className="px-4 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition"
            >
              -
            </button>
            <button
              onClick={multiplyHandler}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition"
            >
              *
            </button>
          </div>

          <div className="text-lg font-bold text-gray-800">
            Result: <span className="text-indigo-600">{calculatedValue}</span>
          </div>
        </div>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
