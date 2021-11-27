import { useHistory } from "react-router";
import { Container, Button, Paper, Box, List, ListItem} from '@mui/material';
import './Confirmation.css';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";


function Confirmation() {
    const history = useHistory();
    const dispatch = useDispatch();
    const week = useSelector(store => store.week)
    const picks = useSelector(store => store.selection)
    
    const handleClick = () => {
        try {
            dispatch({ type: 'CLEAR_WEEK'})
            dispatch({ type: 'CLEAR_GAMES'})
            dispatch({ type: 'CLEAR_PICK_SELECTIONS'})
            history.push('/home');
        } catch (error) {
            console.log('error in confirm handleClick', error);
        }
    } // end handleClick

    return (
        <>
            <div className="containerDiv">
                <Container className="container">
                    <Paper elevation={24}>
                        <h1 className="mainHeader">YOUR WEEK {week} PICKS HAVE BEEN SAVED</h1>
                        {/* <List className="confirmList">
                            {picks.map(pick => (
                                <ListItem key={pick.id}>{pick.pick}</ListItem>
                            ))}
                        </List> */}
                        <div className="center">
                            <Box p={10}>
                                <Button
                                    variant="outlined"
                                    onClick={handleClick}>HOME</Button>
                            </Box>
                        </div>
                    </Paper>
                </Container>
            </div>
        </>
    )
} // end Confirmation

export default Confirmation;