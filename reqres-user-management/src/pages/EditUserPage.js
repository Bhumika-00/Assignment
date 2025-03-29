import React, { useState, useEffect } from 'react';
import EditUser from '../components/EditUser';
import { getUsers } from '../api/api';
import { useParams } from 'react-router-dom';

const EditUserPage = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUsers(1);
      const selectedUser = data.data.find((u) => u.id === parseInt(id));
      setUser(selectedUser);
    };
    fetchUser();
  }, [id]);

  return user ? <EditUser user={user} /> : <p>Loading...</p>;
};

export default EditUserPage;
