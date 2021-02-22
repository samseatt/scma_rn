import * as ActionTypes from './ActionTypes';

export const flow = (state  = { isLoading: true,
                                    errMess: null,
                                    flow:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FLOW:
        return {...state, isLoading: false, errMess: null, flow: action.payload};

        case ActionTypes.FLOW_LOADING:
            return {...state, isLoading: true, errMess: null, flow: []}

        case ActionTypes.FLOW_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
          return state;
    }
};