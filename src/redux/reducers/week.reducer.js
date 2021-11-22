

const weekReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET_SELECTED_WEEK':
            return action.payload;
        default:
            return state;
    }
} // end WeekReducer

export default weekReducer;