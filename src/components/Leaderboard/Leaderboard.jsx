import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import './Leaderboard.css';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

function Leaderboard() {

    const leaderboard = useSelector(store => store.leaderboard)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_LEADERBOARD' })
    }, [])
    return (
        <>
            <Container>
                <h1>WELCOME TO THE LEADERBOARDS</h1>
                <div className="container">
                    {leaderboard.map(member => (
                        <div key={member.id} 
                        className="card">
                            <h4>{member.display_name}</h4>
                            <h3>SCORE: {member.pick_score}</h3>
                        </div>
                        // <Card sx={{ maxWidth: 345 }}>
                        //     <CardActionArea>
                        //         {/* <CardMedia
                        //             component="img"
                        //             height="140"
                        //             image="/static/images/cards/contemplative-reptile.jpg"
                        //             alt="green iguana"
                        //         /> */}
                        //         <CardContent>
                        //             <Typography gutterBottom variant="h5" component="div">
                        //             {member.username}
                        //             </Typography>
                        //             <Typography variant="body2" color="text.secondary">
                        //             {member.pick_score}
                        //             </Typography>
                        //         </CardContent>
                        //     </CardActionArea>
                        // </Card>
                    ))}
                </div>
            </Container>
        </>
    )
} // end Leaderboard

export default Leaderboard;