import React from "react";
import "./styles.css";
import Navbar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import {Route, Switch} from "react-router-dom";
import MoviesComponent from "./components/Movies/Movies/MoviesComponent";

const App = () => {
    return <>
        <Navbar/>
        <div className="container mt-2" style={{marginTop: 40}}>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/about" exact>
                    <About/>
                </Route>
                <Route path="/movies" exact>
                    <MoviesComponent/>
                </Route>
            </Switch>
        </div>
    </>;
};

export default App;

// <Route path="/profile/:name">
//     <Profile/>
// </Route>