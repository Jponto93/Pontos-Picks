

const weekReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET_SELECTED_WEEK':
            return action.payload;
        case 'CLEAR_WEEK': 
            return 0;
        case 'LOGOUT': 
            return 0;
        default:
            return state;
    }
} // end WeekReducer

export default weekReducer;