import React from 'react';
import './App.css';
import UserInputBox from './components/UserInputBox';
import OutputTextBox from './components/OutputTextBox';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div class="container">
        <div className="row">
          <div className="col"><UserInputBox ></UserInputBox></div>
          <div className="col"><OutputTextBox ></OutputTextBox></div>
        </div>
      </div>

    </Provider>
  );
}

export default App;
