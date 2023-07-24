import styles from "./GroupComponent1.module.css";
const GroupComponent1 = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.nypPreliminaryRound}>NYP Preliminary Round</div>
    </div>
  );
};

export default GroupComponent1;
