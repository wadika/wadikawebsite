import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <div className="App">
            <header className="App-header">
              <div className="some-rectangle">
                <h1>Wadika Faisal</h1>
              </div>
              <p>About me!!! Welcome to my life homies!!</p>
            </header>
          </div>
        </Route>
        <Route path="/users"></Route>
        <Route path="/"></Route>
      </Switch>
    </Router>
  );
}

export default App;
