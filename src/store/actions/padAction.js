import { padService } from "../../services/padService.js"



export function loadPads() {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const pads = await padService.query()
            dispatch({ type: 'SET_PADS', pads })
        } catch (err) {
            console.log('padActions: err in load pads', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }
    }
}


export function loadPad(padId) {
    return async dispatch => {
        try {
            dispatch({ type: 'LOADING_START' })
            const pad = await padService.getPadById(padId) /
            dispatch({ type: 'SET_PAD', pad })
        } catch (err) {
            console.log('padActions: err in load pad', err)
        } finally {
            dispatch({ type: 'LOADING_DONE' })
        }

    }
}

export function resetPad() {
    return async dispatch => {
        try {
            dispatch({ type: 'RESET_PAD' })
        } catch (err) {
            console.log('padActions: err in load pad', err)
        }
    }
}


export function savePad(pad) {
    console.log('save pad in pad.action')
    const type = pad._id ? 'UPDATE_PAD' : 'ADD_PAD'
    return async dispatch => {
        try {
            await padService.save(pad)
            dispatch({ type, pad })
        } catch (err) {
            console.log('padActions: err in save pads', err)
        }
    }
}