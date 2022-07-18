import React, { useState } from "react";
import styles from "./styles/ToggleButtonYesNo.module.scss";
type Props = {
  getCallback: (value: boolean) => void;
  label: string;
};

// when you implement this , think to implement getCallback to get data on parent
function ToggleButtonYesNo(_props: Props) {
  const [isClicked, setIsClicked] = useState(false);
  const onClickCheckBox = () => {
    setIsClicked(!isClicked);
    _props.getCallback(!isClicked);
  };

  return (
    <>
      <div className={styles.container}>
        <label className={styles.labelCheckBox}>
          {_props.label}
          <div className={styles.toggleButtonCover}>
            <div className={styles.buttonCover}>
              <div className={styles.button} id="button3">
                <input
                  type="checkbox"
                  className={styles.checkbox}
                  onClick={onClickCheckBox}
                />
                <div className={styles.knobs}></div>
                <div className={styles.layer}></div>
              </div>
            </div>
          </div>
        </label>
      </div>
    </>
  );
}

export default ToggleButtonYesNo;
