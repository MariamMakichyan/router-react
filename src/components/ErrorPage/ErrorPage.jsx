import { NavLink } from "react-router-dom";
import "./ErrorPage.css";

function ErrorPage() {
  return (
    <div className="error-page">
      <h1>404</h1>
      <h2>Oops! Page Not Found </h2>
      <p>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <NavLink to="/" className="back-home">
        Go Back Home
      </NavLink>
    </div>
  );
}

export default ErrorPage;
