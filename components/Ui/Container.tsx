import React, { ReactNode } from "react";

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center bg-secondary-light border border-borders rounded-2xl py-12 px-10 w-2/5 backdrop-blur-sm">
      {children}
    </div>
  );
};

export default Container;
