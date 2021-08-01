import logo from './logo.svg';
import './App.css';
import Home from './Components/Component-page/Home';

import View from './Components/Component-page/View'
import {BrowserRouter,Route, Router} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Route exact path='/'  component={Home}/>
       <Route exact path='/View' component={View}/>
       
      </BrowserRouter>
    
    </div>
  );
}

export default App;
