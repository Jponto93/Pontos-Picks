import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* fetchMemberWeekSaga () {
    yield takeLatest('FETCH_MEMBER_WEEK', fetchMemberWeek)
} // end fetchMemberWeek

function* fetchMemberWeek (action) {
    const { week } = action.payload
    try {
        const response = yield axios.get(`/api/details?id=${action.payload.id}&week=${week}`)
        console.log('you have made it this far');
        yield put({ type: 'SET_DETAILS', payload: response.data})
    } catch (error) {
        console.log('error in fetch details', error);
    }
} // end fetchMemberWeek

export default fetchMemberWeekSaga;
