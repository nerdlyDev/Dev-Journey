import React from "react";
import { useSocket } from "../SocketContext";

function ActiveUserList() {
  const { users, socket } = useSocket();

  return (
    <div className="sidebar">
      <h3>Users</h3>
      <ul>
        {users
          .filter((user) => user.socketId !== socket.id) // Exclude the current user
          .map((user) => (
            <li key={user.socketId} className="user-item">
              <span
                className={`status-dot ${user.status === "active" ? "green" : "gray"}`}
              ></span>
              <span className="username">{user.username}</span>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default ActiveUserList;
