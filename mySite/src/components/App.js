import React, {Component, Suspense, lazy} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Sidebar from "./base/sidebar";
import Home from "./pages/Home";

/**
 * Dynamic Imports. All the pages get imported dynamically
 */
const About = lazy(() => import(/* webpackChunkName: "About" */ "./pages/About"));
const MyWork = lazy(() => import(/* webpackChunkName: "MyWork" */ "./pages/MyWork"));
const Experience = lazy(() => import(/* webpackChunkName: "Experience" */ "./pages/Experience"));
const Skills = lazy(() => import(/* webpackChunkName: "Skills" */ "./pages/Skills"));
const Contact = lazy(() => import(/* webpackChunkName: "Contact" */ "./pages/Contact"));
const Error404 = lazy(() => import(/* webpackChunkName: "Error404" */ "./pages/Error404"));

/**
 * Initializing history
 */
var history = createBrowserHistory();

export default class App extends Component{

    componentDidMount(){
        /**
         *  Dynamically importing google analytics module after the component has mounted
         */
        import(/* webpackChunkName: "ga" */ 'react-ga').then(ReactGA => {
            // Initialize google analytics page view tracking
            ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
            history.listen(location => {
              ReactGA.set({ page: location.pathname }); // Update the user's current page
              ReactGA.pageview(location.pathname + location.search); // Record a pageview for the given page
            });
        })
    }

    render() {
        return (
            <Router history={history}>
                <div id="MainWrapper">

                    <div id='SidebarWrapper'>
                        <Sidebar />
                    </div>

                    <div id='ContentBodyWrapper'>
                        <Suspense fallback={
                            <div className="lds-ring">
                                <div> </div>
                                <div> </div>
                                <div> </div>
                                <div> </div>
                            </div>
                        }>
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