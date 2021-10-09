import {HIDE_ALERT, SHOW_ALERT, SideEffectsAction, SideEffectsState} from "../types/sideEffectsTypes";


const initialState: SideEffectsState = {
    alert: false
};

export default (state= initialState, action: SideEffectsAction): SideEffectsState => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, alert: true};
        case HIDE_ALERT:
            return {...state, alert: false};
        default:
            return state;
    }
}