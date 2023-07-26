import styles from "./OfficialLogo.module.css";
const OfficialLogo = () => {
  return (
    <div className={styles.officialLogo}>
      <img className={styles.image16Icon} alt="" src="/image-16@2x.png" />
      <img className={styles.image18Icon} alt="" src="/image-18@2x.png" />
      <div className={styles.nextParent}>
        <b className={styles.next}>Next</b>
        <img className={styles.image26Icon} alt="" src="/image-26@2x.png" />
      </div>
    </div>
  );
};

export default OfficialLogo;
