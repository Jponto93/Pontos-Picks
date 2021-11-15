import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* gamesSaga() {
    yield takeLatest('FETCH_GAMES', fetchGames)
}

function* fetchGames() {
    console.log('inside fetchGames');
    try {
        const response = yield axios.get('/api/games')
        console.log('this is response.data', response.data);
        yield put({ type: 'SET_GAMES', payload: response.data })

    } catch (error) {
        console.log('error in get', error);
    }
}

export default gamesSaga;