import React from 'react';
import { Switch } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { changeTheme } from '../state/theme.actions';

const ThemeSwitcherWidget = () => {
    const dispatch = useAppDispatch();
    const { light } = useAppSelector((state) => state.themeReducer);

    const onChangeTheme = (val: boolean) => {
        dispatch(changeTheme(val));
    };

    return (
        <Switch checked={light} color="info" onChange={() => onChangeTheme(!light)} />
    );
};

export default ThemeSwitcherWidget;
