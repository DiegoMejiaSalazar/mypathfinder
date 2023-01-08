import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import RootPage from './containers/root';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/home' component={RootPage} />
      </Routes>
    </Router>

  );
}

export default App;
