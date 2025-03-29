import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {users.map((user) => (
        <div key={user.id} className="p-4 border rounded shadow">
          <img src={user.avatar} alt={user.first_name} className="w-24 h-24 mb-2 rounded-full" />
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => onEdit(user.id)}
              className="bg-yellow-500 text-white px-4 py-2 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(user.id)}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserList;