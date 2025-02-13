import { RouterProvider, createRouter } from "@tanstack/react-router";
// Import the generated route tree
import { routeTree } from "./routeTree.gen";
import NotFound from "./components/not-found/NotFound";

// Create a new router instance
const router = createRouter({
  routeTree,
  defaultNotFoundComponent: () => {
    return <NotFound />;
  },
});

export default function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}
