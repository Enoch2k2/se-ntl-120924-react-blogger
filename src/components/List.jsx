import React from 'react';
import BlogCard from './Card';
import { Grid, Container, Typography } from '@mui/material';

const List = ({ blogs }) => {
  return (
    <Container>
      <Typography variant="h4" component="h2" gutterBottom>
        Blog List
      </Typography>
      <Grid container spacing={4}>
        {blogs.map((blog, idx) => (
          <Grid item key={idx+1} xs={12} sm={6} md={4}>
            <BlogCard blog={blog} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default List;