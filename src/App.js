import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/home';
import detalle from './screens/Detalle/detalle';
import NotFound from './screens/NotFound/NotFound';
import Peliculas from './screens/Peliculas/Peliculas';
import Search from './screens/Search/Search';



function App() {
  return (
    <div className="App">
     <Switch>
    <Route component = {Home} path = '/' exact = {true} />
    <Route component = {detalle} path = '/detalle/:id'  />
    <Route component = {Peliculas} path = '/peliculas/:contenido' />
    <Route component = {Search} path = '/search'  />


    <Route component = {NotFound} path = '' />

     </Switch>

    </div>
  );
}

export default App;
