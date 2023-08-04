import { FC, HTMLAttributes, useState } from "react";
import styles from "./MobileMenu.module.scss";
import cn from "classnames";
import { Logo } from "@components/logo/Logo";
import { MenuItem } from "../menuItem/MenuItem";
import { menuItems } from "../menu/Menu";
import { useHideScroll } from "@hooks/useHideScroll";

export const MobileMenu: FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const [showMenu, setShowMenu] = useState(false);
  useHideScroll(showMenu);

  return (
    <>
      <div
        className={cn(styles.burgerWrapper, className)}
        onClick={() => setShowMenu(true)}
      >
        <div className={styles.burger} />
      </div>
      <div
        onClick={() => setShowMenu(false)}
        className={cn(styles.layout, {
          [styles.open]: showMenu,
        })}
      >
        <div className={styles.mobileMenu} onClick={(e) => e.stopPropagation()}>
          <div className={styles.headerMenu}>
            <Logo />
            <button
              className={styles.btn}
              type="button"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <ul className={styles.menu}>
            {menuItems.map((item) => (
              <li key={item.title} className={styles.menuItem}>
                <MenuItem title={item.title} />
              </li>
            ))}
            <li>Buy Now</li>
          </ul>
        </div>
      </div>
    </>
  );
};
