import { initialState, State } from './root.state';
import { RootActionTypes, RootActions } from './root.actions';

export function reducer(state = initialState, action: RootActions): State {
    switch (action.type) {
        case RootActionTypes.EncodeRequest:
            return {
                ...state,
                input: action.payload.data.input
            };
        case RootActionTypes.EncodeSuccess:
            return {
                ...state,
                result: action.payload.data.result
            };
        case RootActionTypes.LoginSuccess:
            return {
                ...state,
                token: action.payload.data.token,
                error: null
            };
        case RootActionTypes.LoginFailure:
            return {
                ...state,
                token: null,
                error: action.payload.error
            };
        default:
            return state;
    }
}
