import { FC } from "react";
import styles from "./MenuItem.module.scss";

export const MenuItem: FC<{ title: string; subMenu?: string[] }> = ({
  title,
  subMenu,
}) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuTitle}>{title}</div>
      {subMenu && (
        <ul className={styles.subMenu}>
          {subMenu.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
