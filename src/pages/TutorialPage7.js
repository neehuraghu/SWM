import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage7.module.css";
const TutorialPage7 = () => {
  const navigate = useNavigate();

  const onGroupContainer2Click = useCallback(() => {
    navigate("/tutorial-page-8");
  }, [navigate]);

  return (
    <div className={styles.tutorialPage7}>
      <div className={styles.tutorialPage7Child} />
      <div className={styles.tutorialPage7Item} />
      <img className={styles.tutorialPage7Inner} alt="" src="/vector-13.svg" />
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
        <div className={styles.balanceAmount}>Balance Amount</div>
        <div className={styles.monthlyProfit}>Monthly Profit</div>
        <div className={styles.eth00000S000Container}>
          <p className={styles.nowYouCan}>ETH 0.0000</p>
          <p className={styles.nowYouCan}>S$0.00</p>
        </div>
        <div className={styles.eth00000S000Container1}>
          <p className={styles.nowYouCan}>ETH 0.0000</p>
          <p className={styles.nowYouCan}>S$0.00</p>
        </div>
        <div className={styles.investedAmount}>Invested Amount</div>
        <div className={styles.eth00000S000Container2}>
          <p className={styles.nowYouCan}>ETH 0.0000</p>
          <p className={styles.nowYouCan}>S$0.00</p>
        </div>
        <div className={styles.rectangleGroup} onClick={onGroupContainer2Click}>
          <div className={styles.groupItem} />
          <b className={styles.connectMyWallet}>Connect My Wallet</b>
        </div>
      </div>
      <div className={styles.image19Parent}>
        <img className={styles.image19Icon} alt="" src="/image-19@2x.png" />
        <div className={styles.rectangleContainer}>
          <div className={styles.groupInner} />
          <img className={styles.searchIcon} alt="" src="/search2.svg" />
          <img className={styles.micNoneIcon} alt="" src="/mic-none2.svg" />
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
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild2} />
        <b className={styles.changeWalletProvider}>Change Wallet Provider</b>
      </div>
      <img className={styles.arrowIcon} alt="" src="/arrow-12.svg" />
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild4} />
        <b className={styles.nowYouCanContainer}>
          <p className={styles.nowYouCan}>
            Now, you can connect your wallet from the app in your phone.
          </p>
          <p className={styles.nowYouCan}>&nbsp;</p>
          <p className={styles.nowYouCan}>Click on “Connect my wallet”</p>
        </b>
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar25.svg" />
    </div>
  );
};

export default TutorialPage7;
