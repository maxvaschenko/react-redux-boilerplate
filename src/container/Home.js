import React, {Component} from "react";
import {connect} from "react-redux";
import {__Home__} from "./styled";
import {Day} from "../components/Day";
import {dates} from '../store/mock'

@connect(state => state,{

})

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseDays: []
        };
    }

    highlightDay = (day) => {
        this.setState({chooseDays: [...this.state.chooseDays, day]})
    };

    render() {
        console.log(this.state)
        return (
            <__Home__>
                {dates.map((i, index) => {
                    return(
                        <Day
                            date={i}
                            onClickAction={() => this.highlightDay(i)}
                            key={index}
                            selected={this.state.chooseDays.filter(item => item === i)[0]}
                        />
                    )
                })}
            </__Home__>
        )
    }
}

export default Home
