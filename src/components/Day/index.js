import React from "react";
import PropTypes from 'prop-types';
import {__Day__} from "./styled";

export const Day = props => {
    return (
        <__Day__
            selected={props.selected}
        >
            <p onClick={props.selected ? props.deactivateHighlight : props.highlightAction}>{props.date}</p>
        </__Day__>
    )
};

Day.propTypes = {
    date: PropTypes.string
};
