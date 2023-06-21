import React, { FC } from 'react';
import { ListItem, Box, Typography, Chip, Button } from '@mui/material';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { IPlan } from './plan.model';

interface IPlanItemProps {
    plan: IPlan;
    activePlanId: number;
}

const PlanItem: FC<IPlanItemProps> = ({ plan, activePlanId }) => {
  const isActive = plan.id === activePlanId; 
  const bgcolor = isActive ? 'info.main' : '';

  return (
    <ListItem sx={{flex: '25%', p: 0}}>
        <Box color='primary' sx={{bgcolor , border: '3px solid', borderColor: 'info.dark', m: 1, p: 2, width: '100%', borderRadius: '10px', textAlign: 'center'}} component="span">
            <Chip sx={{fontSize: 22, mb: 3, p:1 }} component="p" color="secondary" variant={'outlined'} label={plan.name} />
            <Typography sx={{fontSize: 24, mt: 3}}><AttachMoneyIcon/>{plan.cost}</Typography>
            <Typography component="span">Month fee</Typography>
            
            <Typography sx={{fontSize: 24, mt: 3}}>{plan.projectsNum}</Typography>
            <Typography component="span">Projects available</Typography>
            
            <Box sx={{mb: 3, mt: 3}}>
              <Typography sx={{fontSize: 24}}>{plan.storingDays}</Typography>
              <Typography component="span">Logs store days</Typography>
            </Box>
            
            <Box sx={{mt: 3}}>
              {isActive ?
                <Button variant="outlined" disabled>Current Plan</Button> : 
                <Button variant="contained">Activate Now</Button> 
              }
            </Box>
        </Box>
    </ListItem>
  )
}

export default PlanItem
