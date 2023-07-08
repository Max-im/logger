import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { ILevels, LevelColors } from '../../logs';

const Label: FC<{level: ILevels}> = ({ level }) => {
    return (
        <Chip
            variant="outlined"
            label={level}
            sx={{
                background: LevelColors[level].bg,
                border: `1px solid ${LevelColors[level].color}`,
            }}
        />
    );
};

export default Label;
