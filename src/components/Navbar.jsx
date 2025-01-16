import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <Typography variant="h6" component="div">
        Blogger
      </Typography>
      <Box>
        <Button color="inherit" to="/" component={Link}>Home</Button>
        <Button color="inherit" to="/blogs" component={Link}>Blog List</Button>
        <Button color="inherit" to="/blogs/new" component={Link}>Create Blog</Button>
      </Box>
    </Box>
  );
}

export default Navbar