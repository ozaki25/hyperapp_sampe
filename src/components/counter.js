import { h } from 'hyperapp';

const Counter = ({ count }, { down, up }) => (
  <main>
    <h1>{count}</h1>
    <button onclick={down}>-</button>
    <button onclick={up}>+</button>
  </main>
);

export default Counter;
