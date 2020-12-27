import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"; import ListBooks from './ListBooks';
import Search from './Search';

function App() {
  return (
    <Router>

      <Switch>
        <Route exact path='/' render={() => (
          <ListBooks
          // contacts={this.state.contacts}
          // onDeleteContact={this.removeContact}
          />
        )} />
        <Route exact path='/search' render={() => (
          <Search
          // contacts={this.state.contacts}
          // onDeleteContact={this.removeContact}
          />
        )} />
        {/* <Route path='/create' render={({ history }) => (
        <CreateContact
          onCreateContact={(contact) => {
            this.createContact(contact)
            history.push('/')
          }}
        />
      )} /> */}
      </Switch>
    </Router>
  );
}

export default App;
