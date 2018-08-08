import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Slide from './components/Slide';
import TextInput from './components/TextInput';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="main">
          <Navbar />
          <Sidebar />
          <TextInput />
          <Slide />
        </div>
      </Provider>
    );
  }
}

export default App;
