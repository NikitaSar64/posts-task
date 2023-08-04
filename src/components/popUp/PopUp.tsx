import { FC } from "react";
import styles from "./PopUp.module.scss";
import { PopUpProps } from "./PopUp.props";

export const PopUp: FC<PopUpProps> = ({ active, setActive, children }) => {
  const closePopUp = () => {
    setActive(null);
  };

  return (
    <>
      {active && (
        <div className={styles.outher} onClick={closePopUp}>
          <div className={styles.inner} onClick={(e) => e.stopPropagation()}>
            <button className={styles.btn} type="button" onClick={closePopUp} />
            {children}
          </div>
        </div>
      )}
    </>
  );
};
