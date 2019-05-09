import React        from "react";
import ReactDOM     from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";

import store        from "state";
import App          from "ui/App";
import Clubs        from "ui/pages/Clubs";
import EventList    from "ui/pages/EventList";
import EventPage    from "ui/pages/EventPage";
import Home         from "ui/pages/Home";
import Leagues      from "ui/pages/Leagues";
import Login        from "ui/pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "ui/app.scss";


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Switch>
                    <Route exact path="/events" component={EventList} />
                    <Route exact path="/events/:id" component={EventPage} />
                    <Route path="/login" component={Login} />
                    <Route path="/clubs" component={Clubs} />
                    <Route path="/leagues" component={Leagues} />
                    {/* <Route exact path="/user/:id" component={User} /> */}
                    <Route path="/*" component={Home} />
                </Switch>
            </App>
        </Provider>
    </Router>
    , document.getElementById("root")
);
