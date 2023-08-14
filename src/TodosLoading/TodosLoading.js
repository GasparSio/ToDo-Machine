import React from 'react';
import './TodosLoading.css';
import  CircularProgress  from "@mui/material/CircularProgress"
import Box from "@mui/material/Box"
function TodosLoading(){

    return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )
  }

export { TodosLoading };