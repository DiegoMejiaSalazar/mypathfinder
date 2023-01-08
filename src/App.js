import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

import RootPage from './containers/root';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/home' element={<RootPage/>} />
      </Routes>
    </Router>

  );
}

export default App;
