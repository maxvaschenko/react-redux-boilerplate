import React, {Component} from "react";
import {connect} from "react-redux";
import {$likeAlbum, $unLikeAlbum} from "../action/albums";

import {__Home__} from "./styled";
import AlbumListItem from '../components/AlbumListItem';
import Like from "../components/Like/index";
import Header from "../components/Header/index";


@connect(state => state,{
    $likeAlbum,
    $unLikeAlbum,
})

class Home extends Component {

    render() {
        const {albums} = this.props;
        return (
            <__Home__>
                <Header/>
                <div className="album-list-container">
                    {albums.data && albums.data.map((item, index) => {
                        const id = item.id.attributes['im:id'];
                        return (
                            <div className="album-list-item" key={index}>
                                <AlbumListItem
                                    cover={item['im:image'][2].label}
                                    singerName={item['im:name'].label}
                                    link={item.link.attributes.href}
                                />
                                <Like
                                    like={() => this.props.$likeAlbum(id)}
                                    unLike={() => this.props.$unLikeAlbum(id)}
                                    liked={!!albums.likedItems.filter(item => item === id).length}
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
