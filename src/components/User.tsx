import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const User = () => {
  const { user, logout } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <h1>User Info</h1>
      <p>Username: {user.username}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default User;
