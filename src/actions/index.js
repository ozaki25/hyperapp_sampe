const actions = {
  down: () => ({ count }) => ({ count: count - 1 }),
  up: () => ({ count }) => ({ count: count + 1 }),
};

export default actions;
