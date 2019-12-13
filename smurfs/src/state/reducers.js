import * as types from './actionTypes'


export function smurfReducer(smurfData = [], action) {
    switch(action.type) {
        case types.SMURF_DATA:
            return action.payload;
        default:
            return smurfData
    }
}

