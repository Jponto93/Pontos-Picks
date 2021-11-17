import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";


function Admin () {

    const dispatch = useDispatch();
    const membersList = useSelector(store => store.members)

    useEffect(() => {
        dispatch({ type: 'FETCH_MEMBERS' })
    }, [])

    return (
        <>
        <h1>WELCOME, ADMIN</h1>
            
        </>

    )
} // end Admin

export default Admin;