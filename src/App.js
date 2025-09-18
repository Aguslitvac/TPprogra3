import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/home';
import detalle from './screens/Detalle/DetallePeliculas';
import NotFound from './screens/NotFound/NotFound';
import Peliculas from './screens/Peliculas/Peliculas';
import Search from './screens/Search/Search';
import TodasPeliculas from './screens/TodasPeliculas/TodasPeliculas';
import Favoritos from './screens/Favoritos/Favoritos'; 
import Series from './screens/Series/Series';
import TodasSeries from './screens/TodasSeries/TodasSeries';
import detallePeliculas from './screens/Detalle/DetallePeliculas';
import detalleSerie from './screens/Detalle/DetalleSeries';




function App() {
  return (
    <div className="App">
     <Switch>
    <Route component = {Home} path = '/' exact = {true} />
    <Route component = {detallePeliculas} path = '/detallepeliculas/:id'  />
    <Route component = {detalleSerie} path = '/detalleserie/:id'  />
    <Route component = {Peliculas} path = '/peliculas/:contenido?' />
    <Route component = {Search} path = '/search'  />
    <Route component = {TodasPeliculas} path = '/todaspeliculas'  />
    <Route component = {Favoritos} path = '/favoritas'  />
    <Route component = {Series} path = '/series:contenido?'  />
    <Route component = {TodasSeries} path = '/todasseries'  />


    <Route component = {NotFound} path = '' />

     </Switch>

    </div>
  );
}

export default App;
