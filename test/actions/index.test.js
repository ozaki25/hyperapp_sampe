import actions from '../../src/actions';

test('#down', () => {
  const result = actions.down()({ count: 0 });
  expect(result).toEqual({ count: -1 });
});

test('#up', () => {
  const result = actions.up()({ count: 0 });
  expect(result).toEqual({ count: 1 });
});
