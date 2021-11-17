import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* pickListSaga () {
    yield takeLatest('SUBMIT_PICK_LIST', submitPickList)
} // end pickSaga

function* submitPickList (action) {
    console.log('inside submitPickList, action.payload is:', action.payload);
    try {
        yield axios.post('/api/picks', action.payload)
    } catch (error) {
        console.log('error in post', error);
    }
} // end submitPickList

export default pickListSaga;