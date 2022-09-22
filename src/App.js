/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prefer-stateless-function */
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Categories from './pages/Categories';
import Books from './pages/Books';
import store from './redux/configureStore';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
