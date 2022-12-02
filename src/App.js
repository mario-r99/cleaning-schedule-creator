import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <Grid container spacing={2} padding={2}>
        <Grid item md={8} xs={12}>
          <Item>xs=8</Item>
        </Grid>
        <Grid item md={4} xs={12}>
          <Item>xs=4</Item>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
