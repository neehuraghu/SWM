import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./InvestPage.module.css";
const InvestPage = () => {
  const navigate = useNavigate();

  const onPressableButtonClick = useCallback(() => {
    navigate("/mekaverse");
  }, [navigate]);

  return (
    <div className={styles.investPage}>
      <div className={styles.investPageChild} />
      <img className={styles.investPageItem} alt="" src="/group-60.svg" />
      <div className={styles.investPageInner} />
      <div className={styles.rectangleDiv} />
      <div className={styles.lineDiv} />
      <div className={styles.investPageChild1} />
      <b className={styles.nfts}>NFTs</b>
      <div className={styles.investPageChild2} />
      <div className={styles.groupDiv}>
        <div className={styles.groupChild} />
      </div>
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.investPageChild3} />
      <div className={styles.myWallet}>My Wallet</div>
      <div className={styles.groupParent}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-272@2x.png" />
      </div>
      <div className={styles.topPicksParent}>
        <div className={styles.topPicks}>Top Picks</div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupItem} />
            <b className={styles.stateAvenue}>State Avenue</b>
            <div className={styles.parent}>
              <div className={styles.div}>$ 400,000</div>
              <div className={styles.ether}>0.0000345 Ether</div>
            </div>
          </div>
          <img className={styles.groupInner} alt="" src="/vector-216.svg" />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild1} />
            <b className={styles.hopeShackUs}>Hope Shack US</b>
            <div className={styles.group}>
              <div className={styles.div1}>$ 500,000</div>
              <div className={styles.ether1}>0.0000678 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild2} alt="" src="/vector-225.svg" />
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild3} />
            <b className={styles.bourneRoad}>Bourne Road</b>
            <div className={styles.container}>
              <div className={styles.div2}>$ 786,000</div>
              <div className={styles.ether2}>0.0000887 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild4} alt="" src="/vector-218.svg" />
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild5} />
            <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
            <div className={styles.parent1}>
              <div className={styles.div3}>$ 90,000</div>
              <div className={styles.ether3}>0.0000761 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild6} alt="" src="/vector-229.svg" />
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild7} />
            <b className={styles.anglesStatue}>Angles Statue</b>
            <div className={styles.parent2}>
              <div className={styles.div4}>$ 76,000</div>
              <div className={styles.ether4}>0.0000302 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild8} alt="" src="/vector-220.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild9} />
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        <div className={styles.balance}>Balance</div>
        <div className={styles.monthlyProfit}>Monthly Profit</div>
        <div className={styles.eth00000S000Container}>
          <p className={styles.eth00000}>ETH 0.0000</p>
          <p className={styles.eth00000}>S$0.00</p>
        </div>
        <div className={styles.div5}>$0.00</div>
      </div>
      <img className={styles.image31Icon} alt="" src="/image-31@2x.png" />
      <img className={styles.sideBarIcon} alt="" src="/side-bar37.svg" />
      <div
        className={styles.pressableButton}
        onClick={onPressableButtonClick}
      />
    </div>
  );
};

export default InvestPage;
