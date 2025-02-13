import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import { ReactLenis } from "lenis/react";

export const Route = createRootRoute({
  component: () => {
    return (
      <ReactLenis root options={{ lerp: 0.1, smooth: true }}>
        <Nav />
        <Outlet />
        <Footer />
        {/* <TanStackRouterDevtools /> */}
      </ReactLenis>
    );
  },
});
