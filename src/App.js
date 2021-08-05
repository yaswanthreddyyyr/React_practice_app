// import logo from './logo.svg';
import './App.css';
// import './index.css';
import React from 'react'
import Navbar from './components/Navbar'
import {Link,NavLink,Switch} from 'react-router-dom'
// import React,{Component} from 'react'
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/post'
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/:post_id' component={Post} />
      </Switch>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
