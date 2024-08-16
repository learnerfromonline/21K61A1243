
import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box, Button } from '@mui/material';

const Filter = ({ categories, companies, filters, onFilterChange }) => {
  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    onFilterChange(name, value);
  };

  return (
    <Box sx={{ padding: 2 ,
      color:'green'
    }}>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select
          name="category"
          value={filters.category}
          onChange={handleFilterChange}
        >
          {categories.map((cat) => (
            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ marginBottom: 2 }}>
        <InputLabel>Company</InputLabel>
        <Select
          name="company"
          value={filters.company}
          onChange={handleFilterChange}
        >
          {companies.map((comp) => (
            <MenuItem key={comp} value={comp}>{comp}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        name="minPrice"
        label="Min Price"
        type="number"
        value={filters.minPrice}
        onChange={handleFilterChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        name="maxPrice"
        label="Max Price"
        type="number"
        value={filters.maxPrice}
        onChange={handleFilterChange}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button variant="contained" onClick={() => onFilterChange('apply', true)}>Apply Filters</Button>
    </Box>
  );
};

export default Filter;
