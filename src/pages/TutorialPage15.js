import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage15.module.css";
const TutorialPage15 = () => {
  const navigate = useNavigate();

  const onGroupContainer10Click = useCallback(() => {
    navigate("/tutorial-page-14");
  }, [navigate]);

  return (
    <div className={styles.tutorialPage15}>
      <div className={styles.tutorialPage15Child} />
      <div className={styles.tutorialPage15Item} />
      <img className={styles.tutorialPage15Inner} alt="" src="/vector-11.svg" />
      <div className={styles.myWallet}>My Wallet</div>
      <div className={styles.groupParent}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <img className={styles.image29Icon} alt="" src="/image-291@2x.png" />
        <div className={styles.balanceAmount}>Balance Amount</div>
        <div className={styles.monthlyProfit}>Monthly Profit</div>
        <div className={styles.eth00000S000Container}>
          <p className={styles.onThePage}>ETH 0.0000</p>
          <p className={styles.onThePage}>S$0.00</p>
        </div>
        <div className={styles.eth00000S000Container1}>
          <p className={styles.onThePage}>ETH 0.0000</p>
          <p className={styles.onThePage}>S$0.00</p>
        </div>
        <div className={styles.investedAmount}>Invested Amount</div>
        <div className={styles.eth00000S000Container2}>
          <p className={styles.onThePage}>ETH 0.0000</p>
          <p className={styles.onThePage}>S$0.00</p>
        </div>
        <div className={styles.rectangleGroup}>
          <div className={styles.groupItem} />
          <b className={styles.connectMyWallet}>Connect My Wallet</b>
        </div>
      </div>
      <div className={styles.image19Parent}>
        <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <img className={styles.searchIcon} alt="" src="/search1.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none1.svg" />
          <div className={styles.searchAssetsAnd}>Search assets and items</div>
        </div>
        <div className={styles.invisible} />
      </div>
      <div className={styles.myPortfolio}>My Portfolio</div>
      <div className={styles.groupDiv}>
        <div className={styles.rectangleDiv} />
        <div className={styles.thereAreNoneHereStartInvWrapper}>
          <div className={styles.thereAreNone}>
            There are none here. Start Investing to add one!
          </div>
        </div>
      </div>
      <div className={styles.rectangleParent1}>
        <div className={styles.groupChild1} />
        <div className={styles.totalDistributions}>Total Distributions</div>
        <div className={styles.div}>300</div>
        <div className={styles.div1}>200</div>
        <div className={styles.div2}>100</div>
        <div className={styles.div3}>0</div>
        <div className={styles.mon}>Mon</div>
        <div className={styles.tue}>Tue</div>
        <div className={styles.wed}>Wed</div>
        <div className={styles.thu}>Thu</div>
        <div className={styles.fri}>Fri</div>
        <div className={styles.sat}>Sat</div>
        <div className={styles.sun}>Sun</div>
      </div>
      <div className={styles.rectangleParent2}>
        <div className={styles.groupChild2} />
        <b className={styles.addWalletProvider}>Add Wallet Provider</b>
      </div>
      <div
        className={styles.rectangleParent3}
        onClick={onGroupContainer10Click}
      >
        <div className={styles.groupChild2} />
        <b className={styles.changeWalletProvider}>Change Wallet Provider</b>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-12.svg" />
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild4} />
        <b className={styles.onThePageContainer}>
          <p className={styles.onThePage}>
            On the page, you see your balance amount, monthly profit, invested
            amount and your own wallet portfolio on a single dashboard for
            buyers.
          </p>
          <p className={styles.onThePage}>&nbsp;</p>
          <p className={styles.onThePage}>
            If you would like to change your wallet provider, click “Change
            Wallet Provider”
          </p>
        </b>
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar4.svg" />
    </div>
  );
};

export default TutorialPage15;
