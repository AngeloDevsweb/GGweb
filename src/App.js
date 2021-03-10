import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import Navegacion from './component/navegacion'
import Home from './component/home'
import Noticias from './component/noticias'

import FallguysMicrosoft from './component/noticias/fallguys'
import Doblexp from './component/noticias/doblexp'
import Newtemp from './component/noticias/newtemp'

function App() {
  return (
    
    <Router>
      
      <Navegacion/>
      
      <Route path="/" exact component={Home} />
        <Route path="/noticias" component={Noticias} />

        <Route path="/fallguysMicrosoft"  component={FallguysMicrosoft} />
        <Route path="/doblexpWarzone" component={Doblexp} />
        <Route path="/temporada2" component={Newtemp} />
        
      
      </Router>
      
      
  );
}

export default App;
