import { useHistory } from "react-router";
import { Container, Button, Paper } from '@mui/material';


function Confirmation() {
    const history = useHistory();

    return (
        <>
            <div className="containerDiv">
            <Container className="container">
                <Paper elevation={24}>
                <h1>YOUR PICKS HAVE BEEN SAVED</h1>
                <div className="center">
                <Button 
                variant="outlined"
                onClick={() => history.push('/home')}>HOME</Button>
                </div>
                </Paper>
            </Container>
            </div>
        </>
    )
} // end Confirmation

export default Confirmation;