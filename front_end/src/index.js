import ReactDOM from 'react-dom';
import Main from './component/Main';
import Register from './component/Register';
import Login from './component/Login';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

ReactDOM.render(
    // <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/register" element={<Register/>}/>
        </Routes>
    </Router>
      
  , document.getElementById('root'))