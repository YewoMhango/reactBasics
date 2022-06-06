import React from "react";
import "./Counter.css";

export default function Counter() {
  let [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <span>
        Count: <b>{count}</b>
      </span>
      <br />
      <CounterButton action={() => setCount(count - 1)}>-</CounterButton>
      <CounterButton action={() => setCount(count + 1)}>+</CounterButton>
      <CounterButton action={() => setCount(0)}>0</CounterButton>
    </div>
  );
}

function CounterButton({
  children,
  action,
}: {
  children: string;
  action: () => void;
}) {
  return <button onClick={action}>{children}</button>;
}
