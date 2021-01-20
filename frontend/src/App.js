import Index from './components/Index';
import Create from './components/Create';
import './App.css'
import { Link, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
function App() {




  return (
    <Router>
      <div id="criar">
      <ul>
        <li>
          <Link to={'/'} >Lista</Link>
        </li>
        <li>
        <Link to={'/criar'} >Adicionar Anime</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path = "/" component={Index}/>
        <Route path = "/criar" component={Create}/>
      </Switch>
      <div className="App">
      </div>
      </div>
    </Router>
   
  );
}

export default App;
