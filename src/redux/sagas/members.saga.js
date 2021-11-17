import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* membersSaga () {
    yield takeLatest('FETCH_MEMBERS', fetchMembers)
} // end membersSaga;

function* fetchMembers () {
    console.log('inside fetchMembers');
    try {
        yield axios.get('/api/members')
    } catch (error) {
        console.log('error in membersSaga', error);
    }
} // end fetchMembers

export default membersSaga;