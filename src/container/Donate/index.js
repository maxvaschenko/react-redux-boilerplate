import React, {Component} from "react";
import {connect} from "react-redux";
import Slider from 'react-rangeslider'
import {Notification} from '../../components/Notification'
import {$showNotification, $hideNotification} from '../../action/notification'

import {__Donate__} from "./styled";

@connect(state => state,{
    $showNotification,
    $hideNotification
})
//TODO refactor coming soon
class Donate extends Component {
    constructor (props, context) {
        super(props, context);
        this.state = {
            donateValue: 50,
        }
    }

    changeInput = () => {
        this.setState({
            donateValue: +this.donateValue.value
        })
    };

    handleChange = value => {
        this.setState({
            donateValue: value
        })
    };

    render() {
        return (
            <__Donate__>
                <div className="still-needed">
                    {this.state.donateValue !== 1000 ?
                        <p><span className="bold">${1000 - this.state.donateValue}</span> Still needed for this project
                        </p> :
                        <p>You are very very cool!!!</p>
                    }
                    <div className="triangle"/>
                </div>
                <div className="donate-form">
                    <div className='slider'>
                        <Slider
                            min={0}
                            max={1000}
                            value={this.state.donateValue}
                            onChange={this.handleChange}
                        />
                    </div>
                    <p className="title"><span className="picked">Only 3 days left</span>to fund this project</p>
                    <p className="description">Join the 42 other donors who have already supported this project. Every dollar helps</p>
                    <div className="input-container">
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.donateValue}
                            ref={e => this.donateValue = e}
                            onChange={e => this.changeInput(e)}
                        />
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={e => this.props.$showNotification('Thank you')}
                        >Give Now
                        </button>
                    </div>
                    <p className="reason"><a href="https://familyshare.com/2078/6-reasons-why-you-should-donate-to-charities" target="_blank">Why give 50$?</a></p>
                </div>
               <div className="additional-buttons">
                   <button
                       type="button"
                       className="additional-buttons-item"
                       onClick={e => this.props.$showNotification('Coming soon...')}
                   >Save for later
                   </button>
                   <button
                       type="button"
                       className="additional-buttons-item"
                       onClick={e => this.props.$showNotification('Coming soon...')}
                   >Tell your friends
                   </button>
               </div>
                <Notification
                    hideNotificationAction={this.props.$hideNotification}
                    message={this.props.notification.message}

                />

            </__Donate__>
        )
    }
}

export default Donate