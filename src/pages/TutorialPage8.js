import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage8.module.css";
const TutorialPage8 = () => {
  const navigate = useNavigate();

  const onGroupContainer8Click = useCallback(() => {
    navigate("/tutorial-page-9");
  }, [navigate]);

  return (
    <div className={styles.tutorialPage8}>
      <div className={styles.tutorialPage8Child} />
      <div className={styles.tutorialPage8Item} />
      <img className={styles.tutorialPage8Inner} alt="" src="/vector-13.svg" />
      <div className={styles.myWallet}>My Wallet</div>
      <div className={styles.groupParent}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
      </div>
      <div className={styles.image19Parent}>
        <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <img className={styles.searchIcon} alt="" src="/search2.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none2.svg" />
          <div className={styles.searchAssetsAnd}>Search assets and items</div>
        </div>
        <div className={styles.invisible} />
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <b className={styles.addWalletProvider}>Add Wallet Provider</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <b className={styles.signIn}>Sign In</b>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupInner} />
        <b className={styles.changeWalletProvider}>Change Wallet Provider</b>
      </div>
      <img className={styles.image53Icon} alt="" src="/image-53@2x.png" />
      <div className={styles.scanTheQr}>
        Scan the QR code below to connect your Kaikas app on your phone or sign
        in with your username and password.
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-12.svg" />
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild2} />
        <b className={styles.youCanConnectContainer}>
          <p className={styles.youCanConnect}>
            You can connect your Kaikas wallet on your phone by scanning the QR
            code as shown or sign in using your Kaikas account username and
            password.
          </p>
          <p className={styles.youCanConnect}>&nbsp;</p>
          <p className={styles.youCanConnect}>
            Click ‘Next’ for the next section.
          </p>
        </b>
        <div className={styles.nextParent} onClick={onGroupContainer8Click}>
          <b className={styles.next}>Next</b>
          <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
        </div>
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar26.svg" />
    </div>
  );
};

export default TutorialPage8;
