import './index.css'
import ReactDOM from 'react-dom'
import React from 'react' // To use JSX

import Primeiro from './components/basics/Primeiro'
import ComParametro from './components/basics/ComParametro'
import Fragment from './components/basics/Fragment'

// Using JSX '<div>'
ReactDOM.render( 
  <div id="app"> 
    <Primeiro></Primeiro>
    <ComParametro
      titulo = "Student Situation"
      student = "Thompson" 
      point = {9.3} />
    <Fragment></Fragment>
  </div>,
  document.getElementById('root')
);