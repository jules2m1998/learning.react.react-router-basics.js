import { Link } from "react-router-dom";

export default function ProductPage() {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to={"/products/p-1"}>Product 1</Link>
        </li>
        <li>
          <Link to={"/products/p-2"}>Product 2</Link>
        </li>
        <li>
          <Link to={"/products/p-3"}>Product 3</Link>
        </li>
      </ul>
    </>
  );
}
