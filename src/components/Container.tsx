import { ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
};
const Container = ({ children }: TContainerProps) => {
  return <div className="h-screen sm:container px-2">{children}</div>;
};

export default Container;
