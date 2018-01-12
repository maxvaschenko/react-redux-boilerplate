import React from "react";
import PropTypes from 'prop-types';
import {__TracklistItem__} from "./styled";

const TracklistItem = (props) => {
    return (
        <__TracklistItem__>
            <a href={props.link} target="_blank">
                <img src={props.cover}/>
                <p>{props.singerName}</p>
                <p>{props.songName}</p>
            </a>
        </__TracklistItem__>
    )
};


TracklistItem.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    singerName: PropTypes.string,
    songName: PropTypes.string
};

export default TracklistItem;