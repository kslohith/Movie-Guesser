import React from 'react';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import db from './firebase';
import { getFirestore, collection, getDocs } from 'firebase/firestore';


const leaderboardData = [
  { name: 'Player 1', score: 100 },
  { name: 'Player 2', score: 85 },
  { name: 'Player 3', score: 70 },
  { name: 'Player 4', score: 60 },
  { name: 'Player 5', score: 50 },
];



function Leaderboard() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const getData = async() => {
            const movies = collection(db, 'movie');
            const leaderboardDataArray = await getDocs(movies);
            const leaderboardData = leaderboardDataArray.docs.map(doc => doc.data());
            leaderboardData.sort((a,b) => b.score - a.score);
            setData(leaderboardData);
        }
        getData();
    }, []);

  return (
    <div>
      <Typography variant="h4" align="center" gutterBottom>
        Leaderboard
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Rank</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Leaderboard;
