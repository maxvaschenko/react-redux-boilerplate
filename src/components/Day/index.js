import React from "react";
import PropTypes from 'prop-types';
import {__Day__} from "./styled";

export const Day = props => {
    return (
        <__Day__>{props.date}</__Day__>
    )
};

Day.propTypes = {
    date: PropTypes.number
};
