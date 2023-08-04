import { FC, HTMLAttributes, useContext } from "react";
import cn from "classnames";
import styles from "./Search.module.scss";
import { SearchContext } from "@context/searchContext";

export const Search: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const { setValue } = useContext(SearchContext);

  return (
    <div className={cn(className)}>
      <input
        className={styles.input}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Serach here..."
      ></input>
      <button className={styles.btn}></button>
    </div>
  );
};
