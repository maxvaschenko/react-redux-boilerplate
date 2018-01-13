import React, {Component} from "react";
import {connect} from "react-redux";
import {$showNotification, $hideNotification} from "../../action/notification";
import {__Notification__} from "../../components/Notification/styled";


@connect(state => state, {
    $showNotification,
    $hideNotification
})

class Notification extends Component {

    get notificationProperties() {
        switch (this.props.notification.type) {
            case 'success':
                return {
                    icon: 'fa-check',
                    backgroundColor: '#63b566'
                };
            case 'error':
                return {
                    icon: 'fa-times',
                    backgroundColor: '#f55c54'
                };
            default:
                return {
                    icon: 'fa-exclamation-circle',
                    backgroundColor: '#ffa12c'
                };
        }
    };

    render() {
        const {message, time} = this.props.notification;
        message && setTimeout(this.props.$hideNotification, time);
        return (
            message && <__Notification__
                backgroundColor={this.notificationProperties.backgroundColor}
            >
                <div className="notification-block">
                    <i className={`fa ${this.notificationProperties.icon}`}/>
                    <h3>{message}</h3>
                </div>
                <i
                    className="fa fa-times close-button"
                    onClick={this.props.$hideNotification}
                />
            </__Notification__>

        )
    }
};


export default Notification;
