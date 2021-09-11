import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import store from 'redux/store'
/**
 * src index | React element를 container DOM에 렌더링
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);