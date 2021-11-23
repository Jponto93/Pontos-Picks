import { useHistory } from "react-router";


function Confirmation () {
    const history = useHistory();

    return (
        <>
        <h1>YOUR PICKS HAVE BEEN SAVED</h1>
        <button onClick={() => history.push('/home')}>HOME</button>
        </>
    )
} // end Confirmation

export default Confirmation;