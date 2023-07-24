import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./KaikasConnectWallet1.module.css";
const KaikasConnectWallet1 = () => {
  const navigate = useNavigate();

  const onGroupContainer7Click = useCallback(() => {
    navigate("/wallet-provider1");
  }, [navigate]);

  return (
    <div className={styles.kaikasConnectWallet}>
      <div className={styles.kaikasConnectWalletChild} />
      <div className={styles.kaikasConnectWalletItem} />
      <img
        className={styles.kaikasConnectWalletInner}
        alt=""
        src="/vector-13.svg"
      />
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
          <img className={styles.searchIcon} alt="" src="/search3.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none3.svg" />
          <div className={styles.searchAssetsAnd}>Search assets and items</div>
        </div>
        <div className={styles.invisible} />
      </div>
      <div className={styles.latestCryptoNews}>Latest Crypto News</div>
      <div className={styles.broughtToYou}>Brought to you by CoinDesk</div>
      <img className={styles.image35Icon} alt="" src="/image-351@2x.png" />
      <img className={styles.image34Icon} alt="" src="/image-341@2x.png" />
      <div className={styles.rectangleContainer}>
        <div className={styles.groupInner} />
        <b className={styles.addWalletProvider}>Add Wallet Provider</b>
      </div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <b className={styles.signIn}>Sign In</b>
      </div>
      <div className={styles.rectangleParent1} onClick={onGroupContainer7Click}>
        <div className={styles.groupInner} />
        <b className={styles.changeWalletProvider}>Change Wallet Provider</b>
      </div>
      <img className={styles.image53Icon} alt="" src="/image-53@2x.png" />
      <div className={styles.scanTheQr}>
        Scan the QR code below to connect your Kaikas app on your phone or sign
        in with your username and password.
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar35.svg" />
    </div>
  );
};

export default KaikasConnectWallet1;
