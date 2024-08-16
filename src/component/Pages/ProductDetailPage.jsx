
import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Box } from '@mui/material';

const ProductDetailPage = () => {
  const { id } = useParams();
  
  
  const product = {
    productName: 'Sample Product',
    price: 1234,
    rating: 4.5,
    discount: 30,
    availability: 'yes',
  };

  return (
    <Container>
      <Box sx={{ padding: 2 }}>
        <Typography variant="h4" component="h1">{product.productName}</Typography>
        <Typography variant="h6" component="h2">Price: ${product.price}</Typography>
        <Typography variant="body1">Rating: {product.rating} ⭐</Typography>
        <Typography variant="body1">Discount: {product.discount}%</Typography>
        <Typography variant="body1">Availability: {product.availability}</Typography>
      </Box>
    </Container>
  );
};

export default ProductDetailPage;
