import styles from "./FrameComponent3.module.css";
const FrameComponent3 = () => {
  return (
    <div className={styles.componentSetParent}>
      <div className={styles.property1defaultParent}>
        <img
          className={styles.property1defaultIcon}
          alt=""
          src="/property-1default.svg"
        />
        <img
          className={styles.property1variant2Icon}
          alt=""
          src="/property-1variant2.svg"
        />
      </div>
      <div className={styles.property1defaultGroup}>
        <img
          className={styles.property1defaultIcon}
          alt=""
          src="/property-1default1.svg"
        />
        <img
          className={styles.property1variant2Icon}
          alt=""
          src="/property-1variant21.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
