import { JSX } from "solid-js";
import getQueryClient from "~/lib/solid-query";

interface LayoutProps {
  children: JSX.Element;
}

const AuthLayout = async (props: LayoutProps) => {
  const queryClient = getQueryClient();

  return (
    <div>
      <div>{props.children}</div>
    </div>
  );
};

export default AuthLayout;
