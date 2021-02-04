# React Route 설정하는 법

### 1. src/pages 폴더를 만듬

### 2. src/pages/index.js 에

```js
export { default as 파일명 } from '파일 위치'

example)
export { default as Home } from './Home';
export { default as Mypage } from './MyPage';
```

### 3. App.js

```js
import React from 'react';
// react-router-dom을 사용하기 위해 npm i react-router-dom 해줘야함.
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Route를 정할 Component를 가져오기 
import { Home } from './pages'
import { Mypage } from './pages';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
    			// exact path는 가장 기본 주소
          <Route exact path="/" component={ Home } />
					// <Route path="원하는 주소" component={ 주소에 맞는 페이지 }>
          <Route path="/mypage" component={ Mypage } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

```

