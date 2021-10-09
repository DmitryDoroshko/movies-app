import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bulma/css/bulma.min.css";
import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";
import {store} from "./store/store";

const application = (
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
);


ReactDOM.render(application, document.getElementById("root"));

