import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Container, TextField, Button, Box, Typography } from '@mui/material';
import { baseUrl, headers } from '../Global';
import { useHandleChange } from '../hooks/form';

const EditForm = ({ blogs, updateBlog }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find(blog => blog.id === id);

  if (!blog) {
    return <Typography variant="h6">Blog doesn't exist</Typography>;
  }

  // const [formData, setFormData] = useState({
  //   title: blog.title,
  //   author: blog.author,
  //   content: blog.content
  // });

  const [formData, handleChange] = useHandleChange({
    title: blog.title,
    author: blog.author,
    content: blog.content    
  })

  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    const options = {
      method: "PATCH",
      headers,
      body: JSON.stringify(formData)
    };

    fetch(baseUrl + "/blogs/" + id, options)
      .then(resp => resp.json())
      .then(data => {
        updateBlog(data);
        navigate(`/blogs/${id}`);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Edit Blog
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <TextField
            label="Content"
            name="content"
            value={formData.content}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={4}
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default EditForm;