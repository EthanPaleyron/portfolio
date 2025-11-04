/* eslint-disable react-hooks/rules-of-hooks */
import {
  createRootRoute,
  Outlet,
  useRouterState,
} from "@tanstack/react-router";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import LoadingScreen from "../components/LoadingScreen";
import { ReactLenis } from "lenis/react";
import { useEffect, useState } from "react";

export const Route = createRootRoute({
  component: () => {
    const routerState = useRouterState();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
      if (routerState.status === "pending") {
        setIsLoading(true);
      } else {
        setTimeout(() => setIsLoading(false), 300);
      }
    }, [routerState.status]);

    return (
      <ReactLenis root>
        <Nav />
        {isLoading ? <LoadingScreen /> : <Outlet />}
        <Footer />
      </ReactLenis>
    );
  },
});
