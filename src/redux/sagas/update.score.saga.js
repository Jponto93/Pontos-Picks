import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* updateScoreSaga () {
    yield takeLatest('UPDATE_MEMBER_SCORE', updateScore)
} // end updateScoreSaga

function* updateScore (action) {
    let idToUpdate = action.payload.id
    console.log('id to update in update saga', idToUpdate);
    try {
        yield axios.put(`/api/members/${idToUpdate}`, action.payload)
        yield put({ type: 'FETCH_MEMBERS' })
    } catch (error) {
        console.log('Error in update score saga', error);
    }
} // end updateScore

export default updateScoreSaga;