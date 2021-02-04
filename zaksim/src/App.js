import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';
import { Mypage } from './pages';
import { MyZaksim } from './pages';
import { Login } from './pages';
import { SignUp } from './pages';
import { Detail } from './pages';
import { Live } from './pages';

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
          <Route path="/Detail" component={Detail} />
          <Route path="/Live" component={Live} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
