import "bootstrap/dist/css/bootstrap.min.css";
import "./ui/app.scss";

import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import App from "./ui/App";
import Clubs from "./ui/pages/Clubs";
import EventList from "./ui/pages/EventList";
import EventPage from "./ui/pages/EventPage";
import Gallery from "./ui/pages/Gallery";
import Home from "./ui/pages/Home";
import Leagues from "./ui/pages/Leagues";
import Login from "./ui/pages/Login";
import React from "react";
import ReactDOM from "react-dom";
import store from "./state";

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Switch>
                    <Route exact path="/events" component={EventList} />
                    <Route exact path="/events/:id" component={EventPage} />
                    <Route path="/gallery" component={Gallery} />
                    <Route path="/login" component={Login} />
                    <Route path="/clubs" component={Clubs} />
                    <Route path="/leagues" component={Leagues} />
                    {/* <Route exact path="/user/:id" component={User} /> */}
                    <Route path="/*" component={Home} />
                </Switch>
            </App>
        </Provider>
    </Router>,
    document.getElementById("root")
);
