const adminDetailsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_DETAILS':
            return action.payload;
        case 'CLEAR_DETAILS':
            return [];
        case 'LOGOUT': 
            return [];
        default:
            return state;
    }
}

export default adminDetailsReducer;