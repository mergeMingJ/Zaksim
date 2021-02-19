import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { createMuiTheme } from "@material-ui/core/styles";

import { Home } from "./pages";
import { Mypage } from "./pages";
import { MyZaksim } from "./pages";
import { About } from "./pages";
import { TestFullScreen } from "./pages";

import { Detail } from "./pages";
import { Live } from "./pages";
import { Community } from "./pages";
import { Category } from "./pages";
import Posting from "./Community/Posting";
import PostDetail from "./Community/PostDetail";
import PostUpdate from "./Community/PostUpdate";
import firebase from "./firebase";
import ChallengeCreate from "./Category/ChallengeCreate";

function App() {
  const colorTheme = createMuiTheme({
    palette: {
      primary: {
        main: "#fc9e4f",
      },
    },
    typography: {
      fontFamily: 'KOTRA_GOTHIC',
    }
  });
  const [myTheme, setMyTheme] = useState(colorTheme);
  useEffect(() => {
    const messaging = firebase.messaging();
    messaging
      .requestPermission()
      .then(() => {
        return messaging.getToken();
      })
      .then((token) => {
        // console.log('Token : ', token);
      })
      .catch(() => {
        // console.log("error");
      });
    messaging.onMessage(function (payload) {
      // console.log(payload);
    });
  });

  return (
    <ThemeProvider theme={myTheme}>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mypage" component={Mypage} />
            <Route path="/MyZaksim" component={MyZaksim} />
            <Route path="/About" component={About} />
            <Route path="/TestFullScreen" component={TestFullScreen} />
            <Route path="/Detail/:id?" component={Detail} />
            <Route path="/Live" component={Live} />
            <Route path="/community" component={Community} />
            <Route path="/write" component={Posting} />
            <Route path="/read/:id?" component={PostDetail} />
            <Route path="/Category/:title?/:tag?" component={Category} />
            <Route path="/update/:id?" component={PostUpdate} />
            <Route path="/ChallengeCreate" component={ChallengeCreate} />
          </Switch>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
