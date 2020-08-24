import ReactDOM from 'react-dom'
import React from 'react' // To use JSX

const tag = <strong>Hello React!</strong>;

// Using JSX '<div>'
ReactDOM.render( 
  <div> 
    { tag }
  </div>,
  document.getElementById('root')
);