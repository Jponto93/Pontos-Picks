import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Select,
    MenuItem,
    Container,
    InputLabel,
    Paper
} from '@mui/material'
import { styled } from '@mui/material/styles'
import MakePickTableItem from "../MakePickTableItem/MakePickTableItem";
import './MakeYourPick.css';
import { useHistory } from "react-router";


function MakeYourPicks() {

    const pickList = useSelector(store => store.selection)
    const history = useHistory();

    const dispatch = useDispatch();
    const games = useSelector(store => store.games)

    const handlePickSubmit = () => {
        console.log('clicked submit');
            if(pickList.length === games.length){
            dispatch({ type: 'SUBMIT_PICK_LIST', payload: pickList })
            history.push('/confirmation')
            } else if(pickList.length < games.length){
                alert('All games must have a prediction!')
            }
    } // end handleSubmit

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        "&:last-child td, &:last-child th": {
            border: 0,
        },
    }));

    return (
        <>  
            <Container className="container center">
                <Paper elevation={24}>
                <h2>SELECT YOUR WEEK</h2>
                <form>
                    <InputLabel>WEEK</InputLabel>
                    <Select label="Week" id=""
                        onChange={((event) => dispatch({ type: 'FETCH_GAMES', payload: event.target.value }))}>
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

                {games.length > 1 ?
                    <TableContainer>
                        <Table>
                            <colgroup>
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10" }} />
                                <col style={{ width: "20%" }} />
                                <col style={{ width: "10" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "10%" }} />
                                <col style={{ width: "10%" }} />
                            </colgroup>
                            <TableHead>
                                <StyledTableRow>
                                    <TableCell align="center">AWAY SCORE</TableCell>
                                    <TableCell align="center">AWAY TEAM</TableCell>
                                    <TableCell align="center"></TableCell>
                                    <TableCell align="center">HOME TEAM</TableCell>
                                    <TableCell align="center">HOME SCORE</TableCell>
                                    <TableCell align="center">DATE</TableCell>
                                    <TableCell align="center">TIME</TableCell>
                                    <TableCell align="center">YOUR PICK</TableCell>
                                    <TableCell align="center">RESULT</TableCell>
                                </StyledTableRow>
                            </TableHead>
                            <TableBody>
                                {games.map((game) => {
                                    return (
                                        <MakePickTableItem game={game}
                                            key={game.id} />
                                    )
                                })}
                            </TableBody>
                        </Table>
                        <button onClick={handlePickSubmit}>SUBMIT PICKS</button>

                    </TableContainer> : <p></p>
                }
                </Paper>
            </Container>
        </>
    )
} // end MakeYourPicks

export default MakeYourPicks;