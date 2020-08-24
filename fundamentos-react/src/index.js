import './index.css'
import ReactDOM from 'react-dom'
import React from 'react' // To use JSX

import Primeiro from './components/basics/Primeiro'

const tag = <strong>Hello React!</strong>;

// Using JSX '<div>'
ReactDOM.render( 
  <div> 
    <Primeiro></Primeiro>
  </div>,
  document.getElementById('root')
);