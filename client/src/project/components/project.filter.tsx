import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToggleButtonGroup, ToggleButton, Box, Tooltip } from '@mui/material';
import useQuery from '../../hooks/useQuery';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { LevelColors, resetLogsAction } from '../../logs'; 

const ProjectFilter = () => {
    const navigate = useNavigate();
    const query = useQuery();
    const { logs } = useAppSelector(state => state.logReducer);
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
  <>
    { Boolean(Object.keys(logs).length) && 
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
      }
      </>
  );
}

export default ProjectFilter;
