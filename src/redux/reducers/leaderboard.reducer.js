const leaderboardReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_LEADERBOARD':
            return action.payload
        default:
            return state
    }
} // end leaderboardReducer

export default leaderboardReducer;