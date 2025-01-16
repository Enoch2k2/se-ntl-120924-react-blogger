import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Container, Typography, Box, Button } from '@mui/material';

const Blog = ({ blogs, removeBlog }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return <Typography variant="h6">Blog not found</Typography>;
  }

  const handleDelete = () => {
    fetch(`http://localhost:3000/blogs/${id}`, {
      method: 'DELETE'
    })
    removeBlog(id);
    navigate('/blogs');
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ padding: 4, marginTop: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          {blog.title}
        </Typography>
        <Typography variant="h6" color="textSecondary" gutterBottom>
          By: {blog.author}
        </Typography>
        <Box sx={{ marginTop: 2 }}>
          <Typography variant="body1" component="p">
            {blog.content}
          </Typography>
        </Box>
        <Box sx={{ marginTop: 2, display: 'flex', gap: 2 }}>
          <Button variant="contained" color="primary" component={Link} to={`/blogs/${id}/edit`}>
            Edit
          </Button>
          <Button variant="contained" color="secondary" onClick={handleDelete}>
            Delete
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Blog;