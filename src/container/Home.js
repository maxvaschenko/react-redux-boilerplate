import React, {Component} from "react";
import {connect} from "react-redux";
import {$likeTrack} from "../action/tracks";

import {__Home__} from "./styled";
import TracklistItem from '../components/TracklistItem';
import Like from "../components/Like";

@connect(state => state,{
    $likeTrack
})

class Home extends Component {



    render() {
        const {tracks, app} = this.props;
        return (
            <__Home__>
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
                                onClick={e => this.props.$likeTrack(id)}
                                id={id}
                            />
                        </div>
                    )
                })}
            </__Home__>
        )
    }
}

export default Home
