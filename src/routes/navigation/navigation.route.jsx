import { Fragment } from "react";
import { Outlet } from "react-router";

const Navigation = () => {
  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
