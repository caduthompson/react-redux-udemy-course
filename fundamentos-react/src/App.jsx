import React from 'react';

import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragment from './components/basics/Fragment';

export default () => (
  <div id="app">
    <h1>React fundamentals (Arrow)</h1>
    <Fragment />
    <ComParametro titulo="Student Situation" student="Thompson" point={9.3} />
    <Primeiro></Primeiro>
  </div>
);
