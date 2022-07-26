import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </>
);




//tamrin user post comment

//navbar
//home / users / post / comment

// home: users list  (button) => post(with user id) (button)
//home: right side :with search(box)
//post and comment has all the comments
//post: button: comment posts (/post)