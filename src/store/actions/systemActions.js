export function isPlay() {
    return async dispatch => {
        try {
            dispatch({ type: 'PLAY_START' })
        } catch (err) {
            console.log('padActions: err in playing audio', err)
        }
    }
}

export function isPause() {
    return async dispatch => {
        try {
            dispatch({ type: 'PLAY_PAUSE' })
        } catch (err) {
            console.log('padActions: err in pausing audio', err)
        }
    }
}

