import React, {Component} from "react";
import Home from "./container/Home";
import {connect} from "react-redux";
import {$getData, $initApp} from "./redux/action/app";


@connect(state => state,{
    $initApp,
    $getData
})

class App extends Component {

    componentWillMount(){
        this.props.$getData();
        this.props.$initApp()
    }

    render(){
        return (
                !this.props.app.error ?
                    <Home/> :
                    <p>Something goes wrong</p>


        )
    }
}

export default App;