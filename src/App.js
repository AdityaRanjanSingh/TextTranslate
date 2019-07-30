import React from 'react';
import './App.css';
import UserInputBox from './components/UserInputBox';
import OutputTextBox from './components/OutputTextBox';
import Actions from './components/Actions'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="container pt-5 h-100">
        <div className="row">
          <div className="col-md-5">
            <UserInputBox ></UserInputBox>
          </div>
          <div className="col-md-2 d-flex align-items-center">
            <Actions></Actions>

          </div>

          <div className="col-md-5">
            <OutputTextBox ></OutputTextBox>
          </div>
        </div>
      </div>

    </Provider>
  );
}

export default App;
