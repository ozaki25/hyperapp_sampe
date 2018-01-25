import { h, app } from 'hyperapp';

const state = {
  count: 0,
};

const actions = {
  down: () => state => ({ count: state.count - 1 }),
  up: () => state => ({ count: state.count + 1 }),
};

const view = (state, actions) => (
  <main>
    <h1>{state.count}</h1>
    <button onClick={actions.down}>-</button>
    <button onClick={actions.up}>+</button>
  </main>
);

const main = app(state, actions, view, document.body);
