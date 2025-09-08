import './App.css';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/Home/home';


function App() {
  return (
    <div className="App">
     <Switch>
    <Route component = {Home} path = '/' exact = {true} />




     </Switch>

    </div>
  );
}

export default App;
