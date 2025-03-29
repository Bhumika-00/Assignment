import React, { useState, useEffect } from 'react';
import UserList from '../components/UserList';
import { getUsers, deleteUser } from '../api/api';
import { useNavigate } from 'react-router-dom';

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1); // Track current page
  const [totalPages, setTotalPages] = useState(1); // Track total pages
  const navigate = useNavigate();

  // Fetch users when page changes
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // Function to fetch users based on current page
  const fetchUsers = async (page) => {
    const { data } = await getUsers(page);
    setUsers(data.data);
    setTotalPages(data.total_pages); // Assuming the API response includes the total pages
  };

  // Handle edit action
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      const response = await deleteUser(id);
      console.log('Delete Response:', response);
      fetchUsers(page); // Refresh the user list
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  return (
    <div className="p-8">
      <UserList users={users} onEdit={handleEdit} onDelete={handleDelete} />
      {/* Pagination Controls */}
      <div className="flex justify-center mt-4">
        {/* Previous Button */}
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 mx-2 bg-gray-200 rounded"
        >
          Previous
        </button>

        {/* Next Button */}
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
          className="px-4 py-2 mx-2 bg-gray-200 rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default UserListPage;
