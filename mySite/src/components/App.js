import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, Redirect} from 'react-router-dom';
import { Router } from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import Sidebar from "./base/sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import MyWork from "./pages/MyWork";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Error404 from "./pages/Error404";


const history = createBrowserHistory();

// Initialize google analytics page view tracking
ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS);
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname + location.search); // Record a pageview for the given page
});


class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: {}
        };
    }

    componentDidMount() {
        fetch(`${process.env.REACT_APP_HOST}/api/sidebar/`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result[0]
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }
    render() {
        const {error, isLoaded, items} = this.state;

        return (
            <Router history={history}>
                <div id="MainWrapper">

                    <div id='SidebarWrapper'>
                        <Sidebar sidebar={items}/>
                    </div>

                    <div id='ContentBodyWrapper'>
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
                    </div>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));