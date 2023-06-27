import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box, Tooltip } from '@mui/material';
import { LevelColors } from '../log/log.model'; 
import { useAppDispatch } from '../hooks/redux';
import { resetLogsAction } from '../log/log.actions';

const ProjectFilter = () => {
    const navigate = useNavigate();
    const {pathname} = useLocation();
    const dispatch = useAppDispatch();
    const [formats, setFormats] = React.useState(() => Object.keys(LevelColors));

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
