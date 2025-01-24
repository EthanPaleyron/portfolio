import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import { ReactLenis } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import { useEffect, useRef } from "react";

export const Route = createRootRoute({
  component: () => {
    const lenisRef = useRef(null);

    useEffect(() => {
      function update(data) {
        const time = data.timestamp;
        lenisRef.current?.lenis?.raf(time);
      }

      frame.update(update, true);

      return () => cancelFrame(update);
    }, []);

    return (
      <ReactLenis root>
        <Nav></Nav>
        <Outlet />
        <Footer></Footer>
        {/* <TanStackRouterDevtools /> */}
      </ReactLenis>
    );
  },
});
