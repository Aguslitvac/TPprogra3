import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/home';
import detalle from './screens/Detalle/detale';
import NotFound from './screens/NotFound/NotFound'


function App() {
  return (
    <div className="App">
     <Switch>
    <Route component = {Home} path = '/' exact = {true} />
    <Route component = {detalle} path = '/detalle/:id' exact = {true} />
    


    <Route component = {NotFound} path = '' />

     </Switch>

    </div>
  );
}

export default App;
