import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box, Tooltip } from '@mui/material';
import { LevelColors } from '../log/log.model'; 
import { useAppDispatch } from '../hooks/redux';
import { resetLogsAction } from '../log/log.actions';
import useQuery from '../hooks/useQuery';

const ProjectFilter = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const filterQuery = query.get('filter');
    const splitFilter = filterQuery ? filterQuery.split(',') : [];
    const filter = Object.keys(LevelColors).filter(level => !splitFilter.includes(level))
    const [formats, setFormats] = React.useState(() => filter);


    const handleAlignment = (e: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
      const filter = Object.keys(LevelColors).filter(level => !newFormats.includes(level)).join(',');
      navigate({ pathname, search: `?filter=${filter}`});
      dispatch(resetLogsAction());
    };

  return (
    <Box sx={{mt:2}}>
      <ToggleButtonGroup value={formats} onChange={handleAlignment}>
        {Object.keys(LevelColors) && Object.keys(LevelColors).map(key => 
          <ToggleButton value={key} key={key} >
            <Tooltip title={key}>
              {/* @ts-ignore */}
              <Box sx={{width: 20, height: 20, bgcolor: LevelColors[key].bg, border: `1px solid ${LevelColors[key].color}`}}></Box>
            </Tooltip>
          </ToggleButton>
        )}
      </ToggleButtonGroup>
    </Box>
  );
}

export default ProjectFilter;
