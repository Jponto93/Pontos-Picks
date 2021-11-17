import { useEffect } from "react";
import { useDispatch } from "react-redux";


function Admin () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])
    
    return (
        <h1>WELCOME, ADMIN</h1>
    )
} // end Admin

export default Admin;