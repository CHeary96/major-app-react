import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './Components/Pages/NavigationBar/NavBar';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/dist/css/bootstrap.min.css';



ReactDOM.render(<React.StrictMode>
  <NavBar/>
  <App />

  </React.StrictMode>,
  document.getElementById('root')
);

