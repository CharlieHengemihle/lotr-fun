import './App.css';
import { Route, Switch } from 'react-router-dom';
import Books from './components/Books/Books.js';
import Characters from './components/Characters/Characters.js';
import Films from './components/Films/Films.js';
import NavHeader from './components/NavHeader/NavHeader.js';

function App() {
  return (
    <div className="App">
      <NavHeader />

      <Switch>
        <Route exact path="/books" component={Books} />
        <Route exact path="/films" component={Films} />
        <Route exact path="/characters" component={Characters} />
      </Switch>
    </div>
  );
}

export default App;
