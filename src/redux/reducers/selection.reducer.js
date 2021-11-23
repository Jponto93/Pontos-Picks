

const selectionReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_PICK_SELECTION':
            state = state.filter(game => game.schedule_id !== action.payload.schedule_id)
            return [...state, action.payload];
        default:
            return state;
    }
} // end selection 

export default selectionReducer;