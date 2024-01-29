import React from "react";
import styles from "./MainComponent.module.css";

const MainComponent = ({
  background,
  dos,
  donts,
  leftIcon,
  rightIcon,
  title,
  heading,
}) => {
  return (
    <div className={styles.mainWrapper} style={{ background: background }}>
      <div className={styles.wrapper}>
        <h3 className={styles.heading}>{heading}</h3>

        <div className={styles.header}>
          <div className={styles.leftIcon}>{leftIcon}</div>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.rightIcon}>{rightIcon}</div>
        </div>
        <div className={styles.dosAndDonts}>
          {dos.map((el, i) => (
            <div className={styles.box}>
              <div className={styles.dosContainer}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <p className={styles.info}>{el}</p>
              </div>
              <div className={styles.dontsContainer}>
                <div className={styles.icon}>
                  <i className="fa-solid fa-check"></i>
                </div>
                <p className={styles.info}> {donts[i]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
