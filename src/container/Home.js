import React, {Component} from "react";
import {connect} from "react-redux";
import {__Home__} from "./styled";
import {Day} from "../components/Day";

@connect(state => state,{

})

class Home extends Component {
    render() {
        return (
            <__Home__>
               <Day date={11.01}/>
            </__Home__>
        )
    }
}

export default Home
