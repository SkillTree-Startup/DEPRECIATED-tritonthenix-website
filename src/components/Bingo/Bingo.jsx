import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import BingoCard from './components/BingoCard/BingoCard';
import Layout from './components/Layout/Layout';

const App = () => (
  <Router>
    <Layout>
      <Switch>
        <Route path="/bingo" component={BingoCard} />
        <Route path="/" component={Home} />
      </Switch>
    </Layout>
  </Router>
);

export default App;