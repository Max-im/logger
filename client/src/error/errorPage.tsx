import { FC } from 'react';

export const ErrorPage: FC = () => {
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div>
            <p>Oooooops, something went wrong</p>
            <button type="button" onClick={reloadPage}>Refresh</button>
        </div>
    );
};
