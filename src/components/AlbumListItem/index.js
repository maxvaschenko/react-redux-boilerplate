import React from "react";
import PropTypes from 'prop-types';
import {__AlbumListItem__} from "./styled";

const AlbumListItem = (props) => {
    return (
        <__AlbumListItem__>
            <a href={props.link} target="_blank">
                <img src={props.cover}/>
            </a>
            <p>{props.singerName}</p>
        </__AlbumListItem__>
    )
};


AlbumListItem.propTypes = {
    link: PropTypes.string,
    cover: PropTypes.string,
    singerName: PropTypes.string,
};

export default AlbumListItem;