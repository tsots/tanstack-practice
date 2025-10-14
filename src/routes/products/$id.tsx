import { createFileRoute } from "@tanstack/react-router";
import { products } from "../../data/products";

export const Route = createFileRoute("/products/$id")({
  loader: ({ params }) => {
    const product = products.find((p) => p.id === params.id);
    if (!product) throw new Error("Product not found");
    return product;
  },
  component: ProductDetail,
});

function ProductDetail() {
  const product = Route.useLoaderData(); // ✅ the correct hook

  return (
    <div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </div>
  );
}
