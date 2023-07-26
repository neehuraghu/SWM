import styles from "./CodeEmailNotification.module.css";
const CodeEmailNotification = () => {
  return (
    <div className={styles.codeEmailNotification}>
      <img className={styles.vectorIcon} alt="" src="/vector.svg" />
      <div className={styles.inbox}>Inbox</div>
      <div className={styles.dearJessicaGohContainer}>
        <span className={styles.dearJessicaGohContainer1}>
          <p className={styles.dearJessicaGoh}>Dear Jessica Goh,</p>
          <p
            className={styles.dearJessicaGoh}
          >{`You have requested to open an account with ChatNFT 3.0. `}</p>
          <p
            className={styles.dearJessicaGoh}
          >{`Your verification code is 340398 `}</p>
        </span>
      </div>
      <img
        className={styles.closeWindowIcon}
        alt=""
        src="/close-window@2x.png"
      />
    </div>
  );
};

export default CodeEmailNotification;
