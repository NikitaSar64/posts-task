import { Logo } from "@components/logo/Logo";
import styles from "./Header.module.scss";
import cn from "classnames";
import { Search } from "@components/search/Search";
import { FC } from "react";
import { Menu } from "./components/menu/Menu";
import { useCheckScroll } from "@hooks/useCheckScroll";
import { MobileMenu } from "./components/mobileMenu/MobileMenu";

export const Header: FC = () => {
  const scroll = useCheckScroll(200);

  return (
    <header
      className={cn(styles.header, { [styles.hideMenu]: scroll == true })}
    >
      <div className={styles.top}>
        <div className={cn("container", styles.headerContainer)}>
          <MobileMenu className={styles.burger} />
          <Logo />
          <Search className={styles.search} />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={cn("container", styles.headerContainer)}>
          <Menu />
        </div>
      </div>
    </header>
  );
};
