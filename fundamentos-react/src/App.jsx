import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Random from './components/basics/Random';
import Primeiro from './components/basics/Primeiro';
import ComParametro from './components/basics/ComParametro';
import Fragment from './components/basics/Fragment';

export default () => (
  <div className="App">
    <h1>React fundamentals</h1>

    <div className="Cards">
      <Card title="#04 - Challenge Card">
        <Random min={1} max={60} />
      </Card>

      <Card title="#03 - Fragment">
        <Fragment />
      </Card>

      <Card title="#02 - Com Parametro">
        <ComParametro
          titulo="Student Situation"
          student="Thompson"
          point={9.3}
        />
      </Card>

      <Card title="#01 - Primeiro Componente">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
