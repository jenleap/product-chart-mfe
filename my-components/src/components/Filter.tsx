import { FormControl, InputLabel, MenuItem, OutlinedInput, Select } from '@mui/material';
import React from 'react';
import './Filter.css';
import ClearIcon from '@mui/icons-material/Clear';
import { Button } from '@mui/material';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

type FilterProps = {
    selected: string;
    title: string;
    options: string[];
    handleChange: any;
    clearSelection: any;
}

function Filter(props: FilterProps) {
    const {selected, options, title, handleChange, clearSelection } = props;
  return (
    <div className='filter-container'>
        <FormControl sx={{ m: 1, width: 300 }}>
        <InputLabel id="demo-multiple-name-label">{ title }</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label={title} />}
          MenuProps={MenuProps}
        >
          {options.map((option: string) => (
            <MenuItem
              key={option}
              value={option}
            >
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button variant="contained" startIcon={<ClearIcon fontSize="large"/>} onClick={clearSelection}></Button>
    </div>
    
  );
}

export default Filter;