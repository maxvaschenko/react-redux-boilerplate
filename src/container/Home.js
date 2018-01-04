import React, {Component} from "react";
import {connect} from "react-redux";
import {__Home__} from "./styled";

@connect(state => state,{

})

class Home extends Component {
    render() {
        return (
            <__Home__>
               <p>Home</p>
            </__Home__>
        )
    }
}

export default Home
