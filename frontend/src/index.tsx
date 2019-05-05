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
import EventList    from "ui/pages/EventList";
import Home         from "ui/pages/Home";
import Login        from "ui/pages/Login";

import "bootstrap/dist/css/bootstrap.min.css";
import "ui/app.css";


ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App>
                <Switch>
                    <Route exact path="/events" component={EventList} />
                    <Route path="/login" component={Login} />
                    {/* <Route exact path="/user/:id" component={User} /> */}
                    <Route path="/*" component={Home} />
                </Switch>
            </App>
        </Provider>
    </Router>
    , document.getElementById("root")
);
