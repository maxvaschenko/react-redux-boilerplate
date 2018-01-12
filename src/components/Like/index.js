import React from "react";
import PropTypes from 'prop-types';
import {__Like__} from "./styled";

const Like = (props) => {
    return (
        <__Like__
            onClick={props.onClick}
        >
            <i className="fa fa-thumbs-up" aria-hidden="true"/>
        </__Like__>
    )
};


//TODO PropTypes

export default Like;