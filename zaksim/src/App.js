import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home } from './pages';
import { Mypage } from './pages';
import { MyZaksim } from './pages';
import { Login } from './pages';
import { SignUp } from './pages';
import { Community } from './pages';
import Posting from './Community/Posting';
import PostDetail from './Community/PostDetail';

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
          <Route path="/community" component={Community} />
          <Route path="/write" component={Posting} />
          <Route path="/read/:id?" component={PostDetail} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
