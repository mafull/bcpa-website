import React        from "react";
import ReactDOM     from "react-dom";
import { Provider } from "react-redux";
import {
    BrowserRouter as Router,
    Route,
    Switch
}                   from "react-router-dom";

import App          from "./App";
import EventList    from "./pages/EventList";
import Home         from "./pages/Home";
import Login        from "./pages/Login";
import store        from "./store";

import "semantic-ui-css/semantic.min.css";


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
