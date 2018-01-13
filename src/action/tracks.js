import {GET_TRACKLIST, GET_TRACKLIST_ERROR, LIKE_TRACK, UNLIKE_TRACK} from "../type/index";

export const $getTracklist = () => {
    return (dispatch) => {
        try{
            fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        type: GET_TRACKLIST,
                        payload: json
                    })
                })
                .catch((error) => {
                    console.log('parsing failed', error);
                    dispatch({
                        type: GET_TRACKLIST_ERROR,
                    })
                });

        } catch (e){
            console.log(e);
            dispatch({
                type: GET_TRACKLIST_ERROR,
            })
        }
    }
};

export function $likeTrack(id) {
    return async (dispatch) => {
        try{
            await dispatch({
                type: LIKE_TRACK,
                payload: id
            })
        } catch (e){

        }
    }
}

export function $unLikeTrack(id) {
    return async (dispatch) => {
        try{
            await dispatch({
                type: UNLIKE_TRACK,
                payload: id
            })
        } catch (e){
            console.log(e)
        }
    }
}