
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Pagination } from '@mui/material';
import ProductCard from '../ProductCard';
import Filter from '../Filter';

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    category: '',
    company: '',
    minPrice: '',
    maxPrice: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchProducts = async () => {
    const BEARER_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIzNzkzODQwLCJpYXQiOjE3MjM3OTM1NDAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6Ijg0YmQyMWNmLWI4YmYtNDhmNS04NDYzLTA4MDIxYmYwZWE4MiIsInN1YiI6InJhbWt1bWFyLnBlbnVtdWRpQHNhc2kuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJTQVNJIElOU1RJVFVURSBPRiBURUNITk9MT0dZIEFORCBFTkdJTkVFUklORyIsImNsaWVudElEIjoiODRiZDIxY2YtYjhiZi00OGY1LTg0NjMtMDgwMjFiZjBlYTgyIiwiY2xpZW50U2VjcmV0IjoiaUpMd1NMYmhlZHNNU09YVSIsIm93bmVyTmFtZSI6IlBFTlVNVURJIFNBVFlBIFJBTSBLVU1BUiIsIm93bmVyRW1haWwiOiJyYW1rdW1hci5wZW51bXVkaUBzYXNpLmFjLmluIiwicm9sbE5vIjoiMjFLNjFBMTI0MyJ9.a0GHljisvaRSpSilehl_7j947XXdCcFjSU_9rni8xj8'

    try {
      const response = await axios.get(`http://20.244.56.144/test/companies/${filters.company}/categories/${filters.category}/products`, {
        params: {
          top: 10,
          minPrice: filters.minPrice,
          maxPrice: filters.maxPrice,
        },
        headers: {
          Authorization: `Bearer ${BEARER_TOKEN}`,
        },
      });
      setProducts(response.data);
      setTotalPages(Math.ceil(response.data.length / 10));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [filters, page]);

  const handleFilterChange = (name, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Filter
        categories={['Phone', 'Computer', 'TV', 'Earphone', 'Tablet', 'Charger', 'Mouse', 'Keypad', 'Bluetooth', 'Pendrive', 'Remote', 'Speaker', 'Headset', 'Laptop', 'PC']}
        companies={['AMZ', 'FLP', 'SNP', 'MYN', 'AZO']}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.productName}>
            <ProductCard
              product={product}
              onClick={() => console.log('Product clicked', product)}
            />
          </Grid>
        ))}
      </Grid>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        sx={{ marginTop: 2, display: 'flex', justifyContent: 'center' }}
      />
    </Container>
  );
};

export default AllProductsPage;
