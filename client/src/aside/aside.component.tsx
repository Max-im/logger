import React, { FC } from 'react'
import { Box, Avatar, Typography }  from '@mui/material';
import { IUser } from '../models/User'

const Aside: FC<{user: IUser}> = ({user}) => {
  return (
    <Box sx={{backgroundColor: '#fff', border: '1px solid #ddd', p: 2, borderRadius: 2,  display: 'flex', flexDirection: 'column'}}>
      <Box>
        <Avatar alt={user.name} src={user.photo}  sx={{ width: 72, height: 72 }} />
        <Typography variant='h6' component='h6'>{user.name}</Typography>
      </Box>
      <Box>2</Box>
      <Box>3</Box>
      <Box>4</Box>
      <Box sx={{flexGrow: 1}}>5</Box>
    </Box>
  )
}

export default Aside;