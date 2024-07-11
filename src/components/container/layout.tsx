import { Component, JSX } from "solid-js";
import { rpc } from "~/lib/rpc";
import getQueryClient from "~/lib/solid-query";

interface LayoutProps {
  children: JSX.Element;
}

const AuthLayout = async (props: LayoutProps) => {
  const queryClient = getQueryClient();

  return (
    <div>
      <div>sasd</div>
    </div>
  );
};

export default AuthLayout;
