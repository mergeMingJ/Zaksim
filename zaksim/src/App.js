import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';
import { Mypage } from './pages';
import { MyZaksim } from './pages';
import { Login } from './pages';
import { SignUp } from './pages';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/mypage" component={Mypage} />
          <Route path="/MyZaksim" component={MyZaksim} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
