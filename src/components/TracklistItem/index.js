import React from "react";
import PropTypes from 'prop-types';
import {__TracklistItem__} from "./styled";

const TracklistItem = (props) => {
    return (
        <__TracklistItem__>

                <img src={props.cover}/>
            <a href={props.link} target="_blank">
                <p>{props.singerName}</p>
            </a>
        </__TracklistItem__>
    )
};


TracklistItem.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    singerName: PropTypes.string,
};

export default TracklistItem;