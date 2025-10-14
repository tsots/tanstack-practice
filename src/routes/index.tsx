import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/products" });
  },
  component: () => <>
    <p>About our noodle store 🍜</p>
    <h1>Are we there yet</h1>
  </>,
});
