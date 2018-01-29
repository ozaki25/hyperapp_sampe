import { h, app } from 'hyperapp';
import appActions from '../../src/actions';
import appState from '../../src/state';
import Counter from '../../src/components/Counter';

beforeEach(() => {
  document.body.innerHTML = '';
});

describe('カウンター', () => {
  test('初期表示は0であること', (done) => {
    const view = (state, actions) =>
      h(
        'main',
        {
          oncreate() {
            expect(document.body.innerHTML.includes('0')).toBe(true);
            done();
          },
        },
        [Counter(state, actions)],
      );

    app(appState, appActions, view, document.body);
  });

  test('+を押すと1になること', (done) => {
    const view = (state, actions) =>
      h(
        'div',
        {
          oncreate() {
            expect(document.body.innerHTML.includes('1')).toBe(true);
            done();
          },
        },
        [Counter(state, actions)],
      );

    const main = app(appState, appActions, view, document.body);

    main.up();
  });

  test('-を押すと-1になること', (done) => {
    const view = (state, actions) =>
      h(
        'div',
        {
          oncreate() {
            expect(document.body.innerHTML.includes('-1')).toBe(true);
            done();
          },
        },
        [Counter(state, actions)],
      );

    const main = app(appState, appActions, view, document.body);

    main.down();
  });
});
