import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import MyNavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <Router>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
