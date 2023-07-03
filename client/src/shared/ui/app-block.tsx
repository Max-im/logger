import React, { FC } from 'react';
import { Paper, Box } from '@mui/material';

type Props = {
  children?: React.ReactNode
}

export const AppBlock: FC<Props> = ({ children, ...args }) => {
  return (
    <Paper sx={{ height: 'calc(100vh - 92px)', display: 'flex' }} {...args}>
      <Box className='container'>
        {children}
      </Box>          
    </Paper>
  )
}
