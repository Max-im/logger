import React from 'react';
import { ToggleButtonGroup, ToggleButton, Box, Tooltip } from '@mui/material';
import { LevelColors } from '../log/log.model'; 
import { useAppDispatch } from '../hooks/redux';

const ProjectFilter = () => {
    const dispatch = useAppDispatch();
    const [formats, setFormats] = React.useState(() => Object.keys(LevelColors));

    const handleAlignment = (e: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
      setFormats(newFormats);
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
