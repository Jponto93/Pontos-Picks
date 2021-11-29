import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import { List, ListItem, Paper, Box } from '@mui/material';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
  
  return (
    <div className="container">
      <h1>Welcome, {user.username}!</h1>
      <h2>Rules:</h2>
      <Paper>
        <Box p={2}>
          <List>
            <ListItem>Each member picks NFL games each week.</ListItem>
            <ListItem>For each correct pick during the regular season, members receive one point.</ListItem>
            <ListItem>Standings are calculated each week and for the year-to-date.</ListItem>
            <ListItem>Earn the most points by the end of the season to win!</ListItem>
          </List>
        </Box>
      </Paper>
      <Box p={5}>
      <LogOutButton className="btn" />
      </Box>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
