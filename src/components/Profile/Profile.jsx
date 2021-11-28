import { useSelector } from "react-redux"
import { List, ListItem, Container, Box, TextField, Button } from '@mui/material';
import './Profile.css';
import { useState } from "react";
import { useDispatch } from "react-redux";


function Profile() {
    const dispatch = useDispatch();
    const user = useSelector(store => store.user)

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
            <Container>
                <Box
                    pl={5}
                    pt={5}>
                    <h1>Welcome {user.username}!</h1>
                </Box>
                <Box className="imageBlock"
                pl={5}
                pt={5}
                >
                    <img src={user.image} alt="profile picture" />
                </Box>
                <Box
                    pl={5}
                    pt={10}>
                    <List>
                        <ListItem>Email: {user.email}</ListItem>
                        <ListItem>Display Name: {user.display_name}</ListItem>
                    </List>
                </Box>
                <Box>
                    <form onSubmit={saveChanges}>
                        <Box
                            pl={5}
                            pt={2}>
                            <TextField
                                onChange={(event) => handleNameChange(event, 'email')}
                                value={profile.email}
                                label="Email"
                                variant="outlined"
                                type="text" />
                        </Box>
                        <Box
                            pt={2}
                            pl={5}>
                            <TextField
                                onChange={(event) => handleNameChange(event, 'displayName')}
                                value={profile.displayName}
                                label="Display Name"
                                variant="outlined"
                                type="text" />
                        </Box>
                        <Box
                            pl={5}
                            pt={2}>
                            <TextField
                                onChange={(event) => handleNameChange(event, 'image')}
                                value={profile.image}
                                label="Display Image URL"
                                variant="outlined"
                                type="text" />
                        </Box>
                        <Box
                            pt={2}
                            pl={5}>
                            <Button
                                type="submit"
                                variant="outlined">SAVE</Button>
                        </Box>
                    </form>
                </Box>
            </Container>
        </>
    )
} // end Profile

export default Profile