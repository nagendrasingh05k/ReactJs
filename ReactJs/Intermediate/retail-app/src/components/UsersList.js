import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UsersList.css"; 

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5001/users")
      .then((response) => {
        console.log("Users fetched:", response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setError("Failed to load users. Please check backend.");
      });
  }, []);

  return (
    <div className="users-container">
      <h2>Registered Users</h2>
      {error && <p className="error-message">{error}</p>}
      <ul>
        {users.length > 0 ? (
          users.map((user) => (
            <li key={user.id}>
              <span className="user-name">{user.username}</span>
              <span className="user-email">{user.email}</span>
            </li>
          ))
        ) : (
          <p>No users found.</p>
        )}
      </ul>
    </div>
  );
};

export default UsersList;
