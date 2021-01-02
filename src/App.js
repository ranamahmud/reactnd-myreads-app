import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"; import ListBooks from './ListBooks';
import Search from './Search';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path='/' render={() => (
          <ListBooks

          />
        )} />
        <Route exact path='/search' render={() => (
          <Search
          />
        )} />

      </Switch>
    </Router>
  );
}

export default App;
