import React, { useState, useEffect } from 'react';
import { updateUser, getUserById } from '../api/api';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    avatar: '',
  });
  const navigate = useNavigate();
  const { id } = useParams();

  // Fetch user data for editing
  useEffect(() => {
    const fetchUser = async () => {
      const { data } = await getUserById(id);
      setFormData(data.data); // Assuming the response has data.data
    };
    fetchUser();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call the updateUser API
      await updateUser(id, formData);
      navigate('/users'); // Navigate back to the user list page
    } catch (err) {
      console.error('Error updating user:', err);
    }
  };

  return (
    <form className="bg-white p-6 rounded shadow" onSubmit={handleSubmit}>
      <input
        name="first_name"
        value={formData.first_name}
        onChange={handleChange}
        className="w-full mb-4 p-2 border"
        placeholder="First Name"
      />
      <input
        name="last_name"
        value={formData.last_name}
        onChange={handleChange}
        className="w-full mb-4 p-2 border"
        placeholder="Last Name"
      />
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full mb-4 p-2 border"
        placeholder="Email"
      />
      <input
        name="avatar"
        value={formData.avatar}
        onChange={handleChange}
        className="w-full mb-4 p-2 border"
        placeholder="Avatar URL"
      />
      <button className="bg-blue-500 text-white p-2 w-full">Update</button>
    </form>
  );
};

export default EditUser;
