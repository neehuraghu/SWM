import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage6.module.css";
const TutorialPage6 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/tutorial-page-7");
  }, [navigate]);

  return (
    <div className={styles.tutorialPage6}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.tutorialPage6Child} />
      <div className={styles.tutorialPage6Item} />
      <img className={styles.tutorialPage6Inner} alt="" src="/vector-13.svg" />
      <div className={styles.changeWalletProvider}>Change Wallet Provider</div>
      <div className={styles.groupParent}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
      </div>
      <div className={styles.image19Parent}>
        <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img className={styles.searchIcon} alt="" src="/search2.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none2.svg" />
          <div className={styles.searchAssetsAnd}>Search assets and items</div>
        </div>
        <div className={styles.invisible} />
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-12.svg" />
      <img className={styles.image29Icon} alt="" src="/image-291@2x.png" />
      <b className={styles.inUse}>(In-Use)</b>
      <img
        className={styles.ellipseIcon}
        alt=""
        src="/property-1default1.svg"
      />
      <img
        className={styles.tutorialPage6Child1}
        alt=""
        src="/property-1default1.svg"
      />
      <img
        className={styles.tutorialPage6Child2}
        alt=""
        src="/property-1default1.svg"
      />
      <img className={styles.image50Icon} alt="" src="/image-50@2x.png" />
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image52Icon} alt="" src="/image-52@2x.png" />
      <img
        className={styles.tutorialPage6Child3}
        alt=""
        src="/property-1default.svg"
      />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <b className={styles.clickNext}>Click ‘Next’.</b>
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar24.svg" />
    </div>
  );
};

export default TutorialPage6;
