

const WeekReducer = (state = 1, action) => {
    switch(action.type){
        case 'SET_SELECTED_WEEK':
            return action.payload;
        default:
            return state;
    }
} // end WeekReducer

export default WeekReducer;