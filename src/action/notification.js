import * as types from '../type';


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

        }
    }
}

export const $hideNotification = () => ({
    type: types.HIDE_NOTIFICATION
});