import * as types from "../type/index";

export const $getAlbumslist = () => {
    return (dispatch) => {
        try{
            fetch('https://itunes.apple.com/us/rss/topalbums/limit=100/json')
                .then((response) => response.json())
                .then((json) => {
                    dispatch({
                        type: types.GET_ALBUM_LIST,
                        payload: json
                    })
                })
                .catch((error) => {
                    console.log('parsing failed', error);
                    dispatch({
                        type: types.GET_ALBUM_LIST_ERROR,
                    })
                });

        } catch (e){
            console.log(e);
            dispatch({
                type: types.GET_ALBUM_LIST_ERROR,
            })
        }
    }
};

export function $likeAlbum(id) {
    return async (dispatch) => {
        try{
            await dispatch({
                type: types.LIKE_ALBUM,
                payload: id
            })
        } catch (e){

        }
    }
}

export function $unLikeAlbum(id) {
    return async (dispatch) => {
        try{
            await dispatch({
                type: types.UNLIKE_ALBUM,
                payload: id
            })
        } catch (e){
            console.log(e)
        }
    }
}
