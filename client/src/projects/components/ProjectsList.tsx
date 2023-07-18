import React, { FC } from 'react';
import { Typography, List, ListItem, ListItemText } from '@mui/material';
import ProjectRow from './ProjectRow';
import { IProject } from '../model/projects.model';

const ProjectsList: FC<{projects: IProject[]}> = ({ projects }) => {
    return (
        <>
            {projects.length > 0
              && (
                  <List>
                      <ListItem disablePadding>
                          <ListItemText primary="Projects list" />
                      </ListItem>
                      {projects.map((project) => <ProjectRow key={project.id} project={project} />)}
                  </List>
              )}

            {projects.length === 0
                && (
                    <Typography variant="subtitle1">
                        You dont have projects yet, please Create new
                    </Typography>
                )}
        </>
    );
};

export default ProjectsList;
