import styles from "./FrameComponent2.module.css";
const FrameComponent2 = () => {
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
      <div className={styles.component1}>
        <div className={styles.state1}>
          <img className={styles.image55Icon} alt="" src="/image-55@2x.png" />
        </div>
        <div className={styles.state2}>
          <img className={styles.image55Icon1} alt="" src="/image-551@2x.png" />
        </div>
        <div className={styles.state3}>
          <img className={styles.image55Icon2} alt="" src="/image-552@2x.png" />
        </div>
        <div className={styles.state4}>
          <img className={styles.image55Icon3} alt="" src="/image-553@2x.png" />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
