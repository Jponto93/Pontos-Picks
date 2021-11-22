import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';


function* leaderboardSaga () {
    yield takeLatest('FETCH_LEADERBOARD', fetchLeaderboard)
} // end leaderboardSaga

function* fetchLeaderboard () {
    console.log('in fetch leaderboard saga');
    try {
        const response = yield axios.get('/api/leaderboard')
        yield put ({ type: 'SET_LEADERBOARD', payload: response.data})
    } catch (error) {
        console.log('error in leaderboard saga', error);
    }
} // end fetchLeaderboard

export default leaderboardSaga;

