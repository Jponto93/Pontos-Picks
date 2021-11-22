const pointCounterReducer = (state = 0, action) => {
    switch(action.type){
        case 'SET_POINT_COUNT':
            return action.payload
        default:
            return state;
    }
} // end pointCounterReducer

export default pointCounterReducer;