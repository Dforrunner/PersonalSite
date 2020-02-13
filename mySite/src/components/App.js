import React, {Component, Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Sidebar from "./base/sidebar";
import Home from "./pages/Home";
import Loader from "./mics/loader";
const About = lazy(() => import(/* webpackChunkName: "About" */ "./pages/About"));
const MyWork = lazy(() => import(/* webpackChunkName: "MyWork" */ "./pages/MyWork"));
const Experience = lazy(() => import(/* webpackChunkName: "Experience" */ "./pages/Experience"));
const Skills = lazy(() => import(/* webpackChunkName: "Skills" */ "./pages/Skills"));
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ "./pages/Contact"));
const Error404 = lazy(() => import(/* webpackChunkName: "Error404" */ "./pages/Error404"));

const history = createBrowserHistory();

// Initialize google analytics page view tracking
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname + location.search); // Record a pageview for the given page
});


class App extends Component{
    render() {
        return (
            <Router history={history}>
                <div id="MainWrapper">

                    <div id='SidebarWrapper'>
                        <Sidebar/>
                    </div>

                    <div id='ContentBodyWrapper'>
                        <Suspense fallback={<Loader />}>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Redirect path="/home" to="/" />
                                <Route exact path="/about" component={About} />
                                <Route exact path="/experience" component={Experience} />
                                <Route exact path="/my-work" component={MyWork} />
                                <Route exact path="/skills" component={Skills} />
                                <Route exact path="/contact" component={Contact} />
                                <Route exact path="/page-not-found-404" component={Error404} />
                                <Route component={Error404} />
                            </Switch>
                        </Suspense>
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));