import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <NavLink to="home">Go back Home</NavLink>
      <h1>404 Not Found</h1>
    </div>
  );
}

export default NotFound;
