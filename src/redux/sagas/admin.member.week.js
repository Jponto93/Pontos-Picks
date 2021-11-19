import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* fetchMemberWeekSaga () {
    yield takeLatest('FETCH_MEMBER_WEEK', fetchMemberWeek)
} // end fetchMemberWeek

function* fetchMemberWeek (action) {
    const week = action.payload.week
    const idToFind = action.payload.id
    console.log('in fetchMemberWeek, week is:', week, ' and idToFind is:', idToFind);
    try {
        yield axios.get(`/api/details/${idToFind}`, week)
        yield put({ type: 'SET_DETAILS', payload: action.payload})
    } catch (error) {
        console.log('error in fetch details', error);
    }
} // end fetchMemberWeek

export default fetchMemberWeekSaga;
