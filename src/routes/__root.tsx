import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import ReactLenis from "lenis/react";
import { useLenisScroll } from "../hooks/use-lenis-scroll";

const activeClassName = "text-white bg-blue-600";

const RootLayout = () => {
  const lenisRef = useLenisScroll();

  return (
    <ReactLenis root ref={lenisRef}>
      <div className="fixed top-2 right-2 z-10 bg-black/20 flex gap-5">
        <Link
          className="px-2 py-1"
          to="/"
          activeProps={{ className: `${activeClassName}` }}
        >
          Home
        </Link>
        <Link
          className="px-2 py-1"
          to="/alea"
          activeProps={{ className: `${activeClassName}` }}
        >
          Alea
        </Link>
      </div>
      <Outlet />
      <TanStackRouterDevtools />
    </ReactLenis>
  );
};

export const Route = createRootRoute({ component: RootLayout });
