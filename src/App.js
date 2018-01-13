import React, {Component} from "react";
import {connect} from "react-redux";
import {$startApp} from "./action/app";
import {$getTracklist} from "./action/tracks";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./container/Home";
import Donate from "./container/Donate";

@connect(state => state, {$startApp, $getTracklist})

class App extends Component {

    componentWillMount(){
        this.props.$startApp();
        this.props.$getTracklist()
    }

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/donate" component={Donate}/>
                    <Route path="*" render={() => (
                        <div><h1>404 Not found!</h1></div>
                    )}/>
                </Switch>
            </Router>
        )
    }
}

export default App