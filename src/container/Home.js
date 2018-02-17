import React, {Component} from "react";
import {connect} from "react-redux";
import {__Home__} from "./styled";
import {Day} from "../components/Day";
import moment from "moment/moment";
require('twix');

let arr = moment('2018-01-01').twix('2018-12-31').toArray('days');
export const dates = arr.map((i) => moment(i).format("D.MM") );
let monthes = moment.months();

@connect(state => state,{

})

class Home extends Component {
    constructor(props) {
        super(props);
        let persistedStore = JSON.parse(localStorage.getItem('chooseDays'));
        this.state = {
            chooseDays: persistedStore || []
        };
    }

    highlightDay = (day) => {
        localStorage.setItem('chooseDays', JSON.stringify([day, ...this.state.chooseDays]));
        this.setState({chooseDays: [...this.state.chooseDays, day]});

    };

    deactivateHighlight = (day) => {
        let unChoosenItems = this.state.chooseDays.filter(item => item !== day);
        this.setState({chooseDays: [...unChoosenItems]});
        localStorage.setItem('chooseDays', JSON.stringify([...unChoosenItems]))
    };

    render() {
        return (
            <__Home__>
                <p className="calendar-title">Календарик-пинарик {moment().year()}</p>
                <div className="months">
                    {monthes.map((month, index) => {
                        return(
                            <div className="month-col" key={index}>
                                <p className="title">{month}</p>
                                {dates.filter(item => item.split('.')[1] == index+1).map((i, index2) => {
                                    return (
                                        <Day
                                            date={i}
                                            highlightAction={() => this.highlightDay(i)}
                                            deactivateHighlight={() => this.deactivateHighlight(i)}
                                            key={index2}
                                            selected={this.state.chooseDays.filter(item => item === i)[0]}
                                        />
                                    )
                                })
                                }
                            </div>
                        )
                    })}
                </div>
            </__Home__>
        )
    }
}

export default Home
