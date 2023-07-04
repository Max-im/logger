import React, { FC } from 'react';

const Documentation: FC = () => {
    const onError = () => {
        throw new Error('alalal');
    };

    return (
        <div>
            Documentation
            <button type="button" onClick={onError}>err</button>
        </div>
    );
};

export default Documentation;
