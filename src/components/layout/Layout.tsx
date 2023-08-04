import { FC, ReactNode } from "react";
import { Header } from "./header/Header";

export const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="container">{children}</main>
    </>
  );
};
