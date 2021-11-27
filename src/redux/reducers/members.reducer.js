const membersReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MEMBERS_LIST':
            return action.payload;
        case 'LOGOUT': 
            return [];
        default: 
            return state;
    }
}

export default membersReducer;