import { useState } from "react";
import { useUser } from "../context/UserContext";

const Login = () => {
  const [username, setUsername] = useState("");
  const { login } = useUser();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(username);

    console.log("username", username);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
