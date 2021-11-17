import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* membersSaga () {
    yield takeLatest('FETCH_MEMBERS', fetchMembers)
} // end membersSaga;

function* fetchMembers () {
    console.log('inside fetchMembers');
    try {
        const response = yield axios.get('/api/members')
        console.log('this is response.data', response.data);
        yield put({ type: 'SET_MEMBERS_LIST', payload: response.data })
    } catch (error) {
        console.log('error in membersSaga', error);
    }
} // end fetchMembers

export default membersSaga;