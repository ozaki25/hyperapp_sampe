import { app } from 'hyperapp';
import state from './state';
import actions from './actions';
import view from './components/Counter';
import './main.css';

app(state, actions, view, document.body);
