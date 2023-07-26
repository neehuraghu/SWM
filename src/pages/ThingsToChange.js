import styles from "./ThingsToChange.module.css";
const ThingsToChange = () => {
  return (
    <div className={styles.thingsToChange}>
      <div className={styles.focusOnOneContainer}>
        <ul className={styles.focusOnOneFeatureFocusOn}>
          <li className={styles.focusOnOne}>Focus on one feature</li>
          <li className={styles.focusOnOne}>Focus on RWA more</li>
          <li>Not necessary to have many features</li>
        </ul>
      </div>
    </div>
  );
};

export default ThingsToChange;
