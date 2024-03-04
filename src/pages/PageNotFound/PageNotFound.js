import { useNavigate } from "react-router-dom";
import "./PageNotFound.css";
export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <main className="page-not-found">
      <h2 className="page-not-found__title">404</h2>
      <p className="page-not-found__subtitle">This page doesn't exist. </p>
      <button
        className="page-not-found__button"
        type="button"
        onClick={() => navigate(-1)}
      >
        Go back
      </button>
    </main>
  );
}
