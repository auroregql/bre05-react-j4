import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
    isConnected: false,
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.email && user.password) {
      setUser({
        ...user,
        isConnected: true,
      });
    }
  };

  if (user.isConnected) {
    return <p>Vous êtes connecté</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={user.email}
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">
          Password
        </label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Connexion</button>
    </form>
  );
}

export default Login;


