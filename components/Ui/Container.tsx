import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

const Container = ({ children, className }: ContainerProps): JSX.Element => {
  return (
    <div
      className={`bg-secondary-light border border-borders rounded-2xl  backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
