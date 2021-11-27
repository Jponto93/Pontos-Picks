const leaderboardReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_LEADERBOARD':
            return action.payload
        case 'LOGOUT': 
            return [];
        default:
            return state
    }
} // end leaderboardReducer

export default leaderboardReducer;