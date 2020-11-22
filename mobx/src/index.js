import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'mobx-react';
// import { RouterStore } from 'mobx-react-router';
import store from './store';
import App from './Layout/App';

// const routerStore = new RouterStore()

// const stores = {
//   routerStore,
//   ...store
// }

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
