import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./WalletProvider3.module.css";
const WalletProvider3 = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/wallet-changes-kaikas");
  }, [navigate]);

  return (
    <div className={styles.walletProvider3}>
      <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
        <div className={styles.groupChild} />
        <b className={styles.next}>Next</b>
      </div>
      <div className={styles.walletProvider3Child} />
      <div className={styles.walletProvider3Item} />
      <img
        className={styles.walletProvider3Inner}
        alt=""
        src="/vector-11.svg"
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
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none1.svg" />
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
        className={styles.walletProvider3Child1}
        alt=""
        src="/property-1default1.svg"
      />
      <img
        className={styles.walletProvider3Child2}
        alt=""
        src="/property-1default1.svg"
      />
      <img className={styles.image50Icon} alt="" src="/image-50@2x.png" />
      <img className={styles.image51Icon} alt="" src="/image-51@2x.png" />
      <img className={styles.image52Icon} alt="" src="/image-52@2x.png" />
      <img
        className={styles.walletProvider3Child3}
        alt=""
        src="/property-1default.svg"
      />
      <img className={styles.sideBarIcon} alt="" src="/side-bar15.svg" />
    </div>
  );
};

export default WalletProvider3;
