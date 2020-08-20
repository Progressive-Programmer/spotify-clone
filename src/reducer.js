export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished 
    token: null,
    // 'BQCpluTNZHhcXi6TU0Rrpqw2D5Dm1_lGYqiEm-HA7wUEM_r0kdnMHG2KufP1XOOHeKapO_ySL1KvNpEkH2nLt-Iz73bO9tVM2j0Y0gNh4xAwIrn8gG2gJpq9lbsngVWwjL1VJMLdUTdZhegGEee2G0g1hYsEtdE1_xBYdFV8HyTmtCPRNvCR', 
    // discover_weekly: null,
};

const reducer = (state, action ) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token : action.token, 
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists : action.playlists,
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly : action.discover_weekly,
            };

        case 'SET_TRACK' :
            return {
                ...state,
                tracks : action.tracks,
            }
            default:
                return state;
    }
}

export default reducer;