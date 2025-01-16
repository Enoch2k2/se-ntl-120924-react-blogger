import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardActions, Typography, Button } from '@mui/material';

const BlogCard = ({ blog }) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          <Link to={`/blogs/${blog.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            {blog.title}
          </Link>
        </Typography>
        <Typography variant="body2" color="textSecondary">
          By: {blog.author}
        </Typography>
        <Typography variant="body1" component="p">
          {blog.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" component={Link} to={`/blogs/${blog.id}`}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogCard;