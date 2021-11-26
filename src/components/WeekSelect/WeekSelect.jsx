import { useDispatch, useSelector } from "react-redux"
import {
    Select,
    MenuItem } from '@mui/material';

function WeekSelect () {

    const dispatch = useDispatch();
    const week = useSelector(store => store.week)

    return (
        <form>
                <Select name="" id=""
                    value={week}
                    onChange={((event) => dispatch({ type: 'SET_SELECTED_WEEK', payload: event.target.value }))}>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                    <MenuItem value={8}>8</MenuItem>
                    <MenuItem value={9}>9</MenuItem>
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={11}>11</MenuItem>
                    <MenuItem value={12}>12</MenuItem>
                    <MenuItem value={13}>13</MenuItem>
                    <MenuItem value={14}>14</MenuItem>
                    <MenuItem value={15}>15</MenuItem>
                    <MenuItem value={16}>16</MenuItem>
                    <MenuItem value={17}>17</MenuItem>
                    <MenuItem value={18}>18</MenuItem>
                </Select>
            </form>
    )
} // end WeekSelect

export default WeekSelect;