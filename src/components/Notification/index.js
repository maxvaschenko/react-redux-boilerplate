import React from 'react';
import PropTypes from 'prop-types';
import {__Notification__} from './styled';

export const Notification = props => {

    return (
        props.message && <__Notification__
        >
            <div className="notification-block">
                <i className='fa fa-check'/>
                <h3>{props.message}</h3>
            </div>
            <i
                className="fa fa-times close-button"
                onClick={props.hideNotificationAction}
            />
        </__Notification__>
    )
};


Notification.propTypes = {
    message: PropTypes.string
};

