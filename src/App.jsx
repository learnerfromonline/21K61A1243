import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AllProductsPage from './component/Pages/AllProductsPage';
import ProductDetailPage from './component/Pages/ProductDetailPage';
import { Container } from '@mui/material';
import React, { useState, useEffect } from 'react';
const App = () => {
  return (
    <>
    
    <Router>
      <Container>
        <Routes>
          <Route path="/" element={<AllProductsPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />
        </Routes>
      </Container>
    </Router>
    <AllProductsPage/>
    </>
  );
};

export default App;
