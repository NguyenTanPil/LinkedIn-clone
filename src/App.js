import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
