import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, Switch, BrowserRouter, Redirect} from 'react-router-dom';
import ReactGA from 'react-ga';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import Sidebar from "./base/sidebar";
import Home from "./pages/home";
import About from "./pages/about";
import Experience from "./pages/experience";
import MyWork from "./pages/my_work";
import Skills from "./pages/skills";
import Contact from "./pages/contact";
import Error404 from "./pages/Error404";

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
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
            <BrowserRouter history={history}>
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
            </BrowserRouter>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('App'));