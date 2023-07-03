import React from 'react';
import { Paper, List, Box, Typography } from '@mui/material';
import PlanItem from '../components/plan.item';
import { useAppSelector } from '../../hooks/redux';

const PlanPage = () => {
  const { plans } = useAppSelector(state => state.planReducer);
  const { user } = useAppSelector(state => state.userReducer);

  return (
    <Paper sx={{height: 'calc(100vh - 92px)', display: 'flex', flexDirection: 'column'}}>
      <Typography sx={{fontSize: 18, pt: 2, textAlign: 'center'}} variant='subtitle2'>
        Welcome to our Plans section!
      </Typography>
      <Typography sx={{fontSize: 16, p: 2, fontWeight: 400}} variant='subtitle2'>
        Choose from a range of options to tailor your service exactly the way you want it. We offer flexible plans designed to meet your unique needs. Select one of our plans today and take control of your experience.
      </Typography>
      <Box sx={{display: 'flex', flexGrow: 1}}>
        <Box className="container" sx={{flexGrow: 1, display: 'flex', flexDirection: 'column'}}>{
          Boolean(plans.length) && 
          <List sx={{display: 'flex'}}>
            {plans.map(plan => <PlanItem key={plan.id} plan={plan} activePlanId={user.planId} />)}
          </List>}
        </Box>
      </Box>
    </Paper>
  )
}

export default PlanPage;
