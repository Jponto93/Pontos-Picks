

const selectionReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PICK_SELECTION':
            return [...state, action.payload]
        default:
            return state;
    }
} // end selection 

export default selectionReducer;