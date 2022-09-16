/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Books from './pages/Books';

function App() {
  return (
    <BrowserRouter>
      <div className="cont">
        <div className="nav">
          <h1>Bookstore CMS</h1>
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/Categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
