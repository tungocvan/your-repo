import React,{Component} from 'react';
import './App.css';
import {
  BrowserRouter,
  } from 'react-router-dom';
import Routers from './Routers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div>
          <Routers/>
     </div>
     </BrowserRouter>
    );
  }
}

export default App;
