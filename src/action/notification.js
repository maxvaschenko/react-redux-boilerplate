import * as types from '../type';

// export const $showNotification = payload => ({
//     type: types.SHOW_NOTIFICATION,
//     payload: payload
// });

export function $showNotification(message, time, type) {
    return async (dispatch) => {
        try {
            await dispatch({
                type: types.SHOW_NOTIFICATION,
                payload: {
                    message,
                    type,
                    time
                }
            })
        } catch (e) {
            //ignore
        }
    }
}

export const $hideNotification = () => ({
    type: types.HIDE_NOTIFICATION
});