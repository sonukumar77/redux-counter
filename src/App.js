import { useSelector, useDispatch } from "react-redux";
import { increaseCounter, decreaseCounter, resetCounter } from "./store/action";
import "./styles.css";

export default function App() {
  const myStoreData = useSelector((store) => store);
  const dispatch = useDispatch();
  console.log(myStoreData);
  return (
    <div className="App">
      <div className="counterContainer">
        <h1>Counter App</h1>
        <p>{myStoreData.count}</p>
        <div>
          <button onClick={() => dispatch(increaseCounter())}>Increase</button>
          <button
            onClick={() =>
              myStoreData.count > 0 ? dispatch(decreaseCounter()) : null
            }
          >
            Decrease
          </button>
          <button onClick={() => dispatch(resetCounter())}>Reset</button>
        </div>
      </div>
    </div>
  );
}
