import { useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const goToProducts = useCallback(() => {
    navigate("/products");
  }, [navigate]);
  return (
    <>
      <h1>My home page</h1>
      <p>
        Go to <Link to={"/products"}>the list of products</Link>
      </p>
      <p>
        <button onClick={goToProducts}>Navigate</button>
      </p>
    </>
  );
}
