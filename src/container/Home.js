import React, {Component} from "react";
import {connect} from "react-redux";
import {$likeTrack, $unLikeTrack} from "../action/tracks";

import {__Home__} from "./styled";
import TracklistItem from '../components/TracklistItem/index';
import Like from "../components/Like/index";
import Header from "../components/Header/index";

@connect(state => state,{
    $likeTrack,
    $unLikeTrack,
})

class Home extends Component {



    render() {
        const {tracks, app, modal} = this.props;
        return (
            <__Home__>
                <Header/>
                <div className="track-list-container">
                    {tracks.data && tracks.data.map((item, index) => {
                        const id = item.id.attributes['im:id'];
                        return (
                            <div className="track-list-item" key={index}>
                                <TracklistItem
                                    cover={item['im:image'][2].label}
                                    singerName={item['im:name'].label}
                                    link={item.link.attributes.href}
                                />
                                <Like
                                    like={e => this.props.$likeTrack(id)}
                                    unLike={e => this.props.$unLikeTrack(id)}
                                    liked={!!tracks.likedItems.filter(item => item===id)[0]}
                                />
                            </div>
                        )
                    })}
                </div>
            </__Home__>
        )
    }
}

export default Home
