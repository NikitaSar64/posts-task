import { FC } from "react";
import logo from "@assets/images/logo.svg";

export const Logo: FC = () => {
  return (
    <a href="#">
      <img src={logo} alt="logo" />
    </a>
  );
};
