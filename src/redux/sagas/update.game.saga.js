//this saga is to update GAME score, not member score
import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
// import { useSelector } from 'react-redux';

function* updateGameSaga() {
    yield takeLatest('UPDATE_GAME_SCORE', updateGameScore)
}


function* updateGameScore (action) {
    // grabbing week to dispatch GET on admin view for week updated
    const weekToUpdate = action.payload.week
    // id of game to update in DB
    const idToUpdate = action.payload.game_id
    console.log('this is idToUpdate', idToUpdate);
    console.log('hello from updateGameScore saga, here is action.payload', action.payload);
    try {
        yield axios.put(`/api/games/${idToUpdate}`, action.payload)
        console.log('hello please see this');
        yield put({ type: 'FETCH_GAMES', payload: weekToUpdate })
    } catch (error) {
        console.log('error in updateGameScore saga', error);
    }
} // end updateGameScore

export default updateGameSaga;