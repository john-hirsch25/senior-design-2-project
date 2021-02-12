import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PageTransition from 'react-router-page-transition';
import Calendar from "./pages/Calendar";
import Blog from "./pages/Blog";
import Home from './pages/Home';
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  return (
    <div>
      <Router>
        <Route
          render={({ location }) => (
            <PageTransition timeout={500}>
            <Switch location={location}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/calendar">
                <Calendar />
              </Route>
              <Route path="/blog">
                <Blog />
              </Route>
              <Route path="/*">
                <NotFoundPage />
              </Route>
            </Switch>
          </PageTransition>
          )}
        />
      </Router>
    </div>
  );
}

export default App;
