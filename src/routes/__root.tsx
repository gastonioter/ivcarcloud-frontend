import { Button } from "@mui/material";
import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
  component: () => (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <div className="">
        <Link to="/" className="">
          Home
        </Link>{" "}
        <Link to="/about" className="">
          About
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
