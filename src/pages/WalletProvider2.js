import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WalletProvider2.module.css";
const WalletProvider2 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/wallet-changes-kaikas1");
  }, [navigate]);

  return (
    <div className={styles.walletProvider2}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.walletProvider2Child} />
      <div className={styles.walletProvider2Item} />
      <img
        className={styles.walletProvider2Inner}
        alt=""
        src="/vector-13.svg"
      />
      <div className={styles.changeWalletProvider}>Change Wallet Provider</div>
      <div className={styles.groupParent}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
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
      <img className={styles.image29Icon} alt="" src="/image-291@2x.png" />
      <b className={styles.inUse}>(In-Use)</b>
      <img
        className={styles.ellipseIcon}
        alt=""
        src="/property-1default1.svg"
      />
      <img
        className={styles.walletProvider2Child1}
        alt=""
        src="/property-1default1.svg"
      />
      <img
        className={styles.walletProvider2Child2}
        alt=""
        src="/property-1default1.svg"
      />
      <img className={styles.image50Icon} alt="" src="/image-50@2x.png" />
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image52Icon} alt="" src="/image-52@2x.png" />
      <img
        className={styles.walletProvider2Child3}
        alt=""
        src="/property-1default.svg"
      />
      <img className={styles.sideBarIcon} alt="" src="/side-bar33.svg" />
    </div>
  );
};

export default WalletProvider2;
