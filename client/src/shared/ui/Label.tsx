import React, { FC } from 'react';
import { Chip } from '@mui/material';
import { ILevels, LevelColors } from '../../logs';

type IType = 'small' | 'medium';

const Label: FC<{level: ILevels, size?: IType}> = ({ level, size }) => {
    size = size || 'small';
    return (
        <Chip
            variant="outlined"
            label={level}
            size={size}
            sx={{
                background: LevelColors[level].bg,
                border: `1px solid ${LevelColors[level].color}`,
            }}
        />
    );
};

export default Label;
