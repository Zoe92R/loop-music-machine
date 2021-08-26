const initialState = {
    pads: [],
    currPad: null
}

export function padReducer(state = initialState, action) {
    switch (action.type) {
        case 'SET_PADS':
            return { ...state, pads: action.pads }
        case 'SET_PAD':
            return { ...state, currPad: action.pad }
        case 'RESET_PAD':
            return { ...state, currPad: null }
        case 'ADD_PAD':
            return { ...state, pads: [action.pad, ...state.pads] }
        case 'UPDATE_PAD':
            return { ...state, pads: [action.pad, ...state.pads.filter(pad => action.pad._id !== pad._id)] }
        case 'REMOVE_PAD':
            return { ...state, pads: state.pads.filter(pad => pad._id !== action.padId) }
        default:
            return state
    }
}