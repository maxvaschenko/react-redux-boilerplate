import React, {Component} from "react";
import {connect} from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./container/Home";


const data = [
    {id: 'dummyTable', title: 'Dummy Table', order: 1, path: 'tabs/dummyTable.js'},
    {id: 'dummyChart', title: 'Dummy Chart', order: 2, path: 'tabs/dummyChart.js'},
    {id: 'dummyList', title: 'Dummy List', order: 0, path: 'tabs/dummyList.js'}
];


@connect(state => state)

class App extends Component {

    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="*" render={() => (
                        <div><h1>404 Not found!</h1></div>
                    )}/>
                </Switch>
            </Router>
        )
    }
}

export default App