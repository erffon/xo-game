import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children: ReactNode;
  className: string;
}): JSX.Element => {
  return (
    <div
      className={`bg-secondary-light border border-borders rounded-2xl  backdrop-blur-sm ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
