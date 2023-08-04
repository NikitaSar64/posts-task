import { FC } from "react";
import { MenuItem } from "../menuItem/MenuItem";
import styles from "./Menu.module.scss";

export const menuItems = [
  {
    title: "Demos",
    subMenu: [
      "Demos Header",
      "Demos Layout",
      "Demos Buttons",
      "Gallery Demos",
      "Video Demos",
    ],
  },
  {
    title: "Post",
    subMenu: [
      "Post Header",
      "Post Layout",
      "Post Buttons",
      "Gallery Post",
      "Video Post",
    ],
  },
  {
    title: "Features",
    subMenu: [
      "Features Header",
      "Features Layout",
      "Features Buttons",
      "Gallery Features",
      "Video Features",
    ],
  },
  {
    title: "Categories",
    subMenu: [
      "Categories Header",
      "Categories Layout",
      "Categories Buttons",
      "Gallery Categories",
      "Video Categories",
    ],
  },
  {
    title: "Shop",
    subMenu: [
      "Shop Header",
      "Shop Layout",
      "Shop Buttons",
      "Gallery Shop",
      "Video Shop",
    ],
  },
];

export const Menu: FC = () => {
  return (
    <nav>
      <ul>
        {menuItems.map((item) => (
          <li key={item.title} className={styles.menuItem}>
            <MenuItem title={item.title} subMenu={item.subMenu} />
          </li>
        ))}
        <li className={styles.menuItem}>Buy Now</li>
      </ul>
    </nav>
  );
};
