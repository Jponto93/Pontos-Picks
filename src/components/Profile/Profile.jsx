import { useSelector } from "react-redux"
import { 
    List, 
    ListItem, 
    Container, 
    Box, 
    TextField, 
    Button, 
    Paper, 
    InputLabel, 
    Select, 
    MenuItem } from '@mui/material';
import './Profile.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import AdminDetail from "../AdminDetail/AdminDetail";

function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)
    const week = useSelector(store => store.week)
    const details = useSelector(store => store.details)

    const [profile, setProfile] = useState({
        email: user.email,
        displayName: user.display_name,
        image: user.image,
    })

    const handleNameChange = (event, property) => {
        console.log('event happened');
        setProfile({
            ...profile,
            [property]: event.target.value
        })
    }

    const saveChanges = event => {
        event.preventDefault();
        dispatch({ type: 'UPDATE_USER_INFO', payload: profile })
    } // end saveChanges

    return (
        <>
            <Container className="profileContainer">
                <Box>
                    <h1>Hello {user.username}!</h1>
                </Box>
                <Box className="profileContainer">
                    <img 
                    src={user.image} alt="profile picture" />
                </Box>
                <Paper elevation={24}>
                <Box>
                    <Box mt={3}
                    p={2}>
                        <h3>CURRENT INFORMATION</h3>
                        <p>Email: {user.email}</p>
                        <p>Display Name: {user.display_name}</p>
                    </Box>
                    <Box>
                        <form onSubmit={saveChanges}>
                            <Box p={2}>
                                <TextField
                                    onChange={(event) => handleNameChange(event, 'email')}
                                    value={profile.email}
                                    label="Email"
                                    variant="outlined"
                                    type="text" />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    onChange={(event) => handleNameChange(event, 'displayName')}
                                    value={profile.displayName}
                                    label="Display Name"
                                    variant="outlined"
                                    type="text" />
                            </Box>
                            <Box p={2}>
                                <TextField
                                    onChange={(event) => handleNameChange(event, 'image')}
                                    value={profile.image}
                                    label="Display Image URL"
                                    variant="outlined"
                                    type="text" />
                            </Box>
                            <Box p={2}>
                                <Button
                                    type="submit"
                                    variant="outlined">SAVE</Button>
                            </Box>
                        </form>
                    </Box>
                </Box>
                
                {/* week select for member history */}
                <form>
                    <InputLabel>VIEW PICK HISTORY</InputLabel>
                    <Select className="weekSel"
                    label="" id=""
                    value={week > 0 ? week : "" }
                        onChange={((event) => dispatch({ type: 'FETCH_MEMBER_WEEK', payload: { id: user.id, week: event.target.value } }))}>
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
                {details.length > 0 ?
                 <AdminDetail /> 
                 : 
                 <p></p> }
                </Paper>
            </Container>

        </>
    )
} // end Profile

export default Profile