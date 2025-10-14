import { createFileRoute, Link } from "@tanstack/react-router";
import { products } from "../../data/products";

export const Route = createFileRoute("/products/")({
  component: () => (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link to="/products/$id" params={{ id: p.id }}>
              {p.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ),
});
