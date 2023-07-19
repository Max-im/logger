import React, { useState } from 'react';
import { Button, Modal, Box, Typography, TextField } from '@mui/material';
import { useAppDispatch } from '../../hooks/redux';
import { createProjectAction } from '../state/projects.actions';
import styles from '../styles/CreateProject.module.scss';

export default function CreateProject() {
    const dispatch = useAppDispatch();
    const [open, setOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value);
    };

    const onError = (errMsg: string) => {
        console.log(errMsg);
    };

    const onCreateProject = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(createProjectAction(title, onError));
        setTitle('');
        handleClose();
    };

    return (
        <>
            <Button variant="contained" onClick={handleOpen}>Create Project</Button>

            <Modal open={open} onClose={handleClose}>
                <Box sx={{ bgcolor: 'background.paper' }} className={styles.createProject__modal}>
                    <form onSubmit={onCreateProject}>
                        <Typography variant="h6" component="h2">Create Project</Typography>
                        <Box sx={{ mt: 1, mb: 1 }}>
                            <TextField label="Title" onChange={onChangeTitle} size="small" variant="filled" />
                        </Box>
                        <Button type="submit" variant="contained">Create Project</Button>
                    </form>
                </Box>
            </Modal>
        </>
    );
}
