import React from "react";
import styles from "../styledComponents/styles/ButtonHover.module.scss";
type Props = {};

function ButtonHover({}: Props) {
  return (
    <>
      <button className={styles.btn btn-3 hover-border-1"}>
        <span>hover me</span>
      </button>
    </>
  );
}

export default ButtonHover;
