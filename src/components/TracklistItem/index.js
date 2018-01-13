import React from "react";
import PropTypes from 'prop-types';
import {__TracklistItem__} from "./styled";

const TracklistItem = (props) => {
    return (
        <__TracklistItem__>
            <a href={props.link} target="_blank">
                <img src={props.cover}/>
            </a>
            <p>{props.singerName}</p>
        </__TracklistItem__>
    )
};


TracklistItem.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    singerName: PropTypes.string,
};

export default TracklistItem;