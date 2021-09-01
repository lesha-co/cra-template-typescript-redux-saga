import { useDispatch, useSelector } from "react-redux";
import { countDown, countUp } from "./actions";
import { counterSelector } from "./selectors";
export const Counter = () => {
  const d = useDispatch();
  const counter = useSelector(counterSelector);
  return (
    <div>
      <button onClick={() => d(countUp())}>+</button>
      <button onClick={() => d(countDown())}>-</button>
      <span>{counter.count}</span>
    </div>
  );
};
