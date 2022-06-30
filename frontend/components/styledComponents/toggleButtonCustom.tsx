import React from "react";
import styles from "../styledComponents/styles/ToggleButtonCustom.module.scss";

type Props = {};

function ToggleButtonCustom(props: Props) {
  return (
    <>
      {/* <section title=".slideThree">
        <div className={styles.slideThree}>
          <input
            className={styles.inputCheckBox}
            type="checkbox"
            id="slideThree"
            name="check"
            checked
          />
          <label className={styles.labelCheckBox} htmlFor="slideThree"></label>
        </div>
      </section> */}

      <div className={styles.togglewrapper}>
        <div className={styles.togglecheckcross}>
          <input id="checkcross" type="checkbox" />
          <label className={styles.toggleitem} htmlFor="checkcross">
            <div className={styles.check}> </div>
          </label>
        </div>
      </div>
    </>
  );
}

export default ToggleButtonCustom;
