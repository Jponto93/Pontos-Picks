import { useSelector } from "react-redux"


function Profile () {
    const user = useSelector(store => store.user)
    return (
        <h1>Welcome {user.username}</h1>
    )
} // end Profile

export default Profile