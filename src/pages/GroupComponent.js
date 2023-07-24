import styles from "./GroupComponent.module.css";
const GroupComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <div className={styles.categoryFinals}>Category Finals</div>
    </div>
  );
};

export default GroupComponent;
