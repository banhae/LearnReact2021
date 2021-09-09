import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import store from 'redux/store'
/**
 * 타입 : 프로젝트의 index?
 * 용도 : 리액트 앱을 실행할 때 최초로 호출되어 여러 컴포넌트를 호출하기 위함?
 */
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);