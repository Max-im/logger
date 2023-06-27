import React, { FC, useEffect } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { useParams } from 'react-router-dom';
import { readLogAction } from './log.actions';

const LogPage: FC = () => {
  const dispatch = useAppDispatch();
  const { projectId, logId } = useParams();


  useEffect(() => {
    dispatch(readLogAction(projectId!, logId!));
  }, []);

  return (
    <div>LogPage</div>
  )
}

export default LogPage;
