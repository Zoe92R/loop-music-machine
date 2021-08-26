import { combineReducers } from 'redux'
import { systemReducer } from './systemReducer'
import { padReducer } from './padReducer'


export const rootReducer = combineReducers({
    systemModule: systemReducer,
    padModule: padReducer,
})
