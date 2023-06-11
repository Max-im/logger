import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/http';
import { USER_DATA } from '../constants';

function UserPage() {
  const navigate = useNavigate();
  
  useEffect(() => {
    api.get(USER_DATA).then(({data}) => console.log(data)).catch(err=> console.log(err))
  }, []);

  return (
      <>UserPage</>
  );
}

export default UserPage;
