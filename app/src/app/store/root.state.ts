
export interface RootState {
    root: State;
}

export interface State {
    token: string;
    input: string;
    result: string;
    error: string;
}

export const initialState: State = {
    token: null,
    input: null,
    result: null,
    error: null
};
