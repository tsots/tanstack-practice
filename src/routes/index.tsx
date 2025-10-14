import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({

  component: () => <>
    <p>About our noodle store 🍜</p>
    <h1>Are we there yet</h1>
  </>,
});
