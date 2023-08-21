import { useCallback } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Detail() {
  const { productId } = useParams();
  const navigate = useNavigate();
  const handleNavigate = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  return (
    <>
      <p>{productId}</p>
      <button type="button" onClick={handleNavigate}>
        Back
      </button>
    </>
  );
}
