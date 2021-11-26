import { useHistory } from "react-router";
import { Container, Button, Paper, Box } from '@mui/material';
import './Confirmation.css';


function Confirmation() {
    const history = useHistory();

    return (
        <>
            <div className="containerDiv">
                <Container className="container">
                    <Paper elevation={24}>
                        <h1 className="mainHeader">YOUR PICKS HAVE BEEN SAVED</h1>
                        <div className="center">
                            <Box p={10}>
                                <Button
                                    variant="outlined"
                                    onClick={() => history.push('/home')}>HOME</Button>
                            </Box>
                        </div>
                    </Paper>
                </Container>
            </div>
        </>
    )
} // end Confirmation

export default Confirmation;