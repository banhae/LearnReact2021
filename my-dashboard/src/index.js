import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'routes/Root';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from "react-redux"
import store from 'redux/store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/*Root(routes/Root)호출*/}
      <Root />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);