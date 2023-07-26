import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./TC.module.css";
const TC = () => {
  const navigate = useNavigate();

  const onGroupContainerClick = useCallback(() => {
    navigate("/invest-page");
  }, [navigate]);

  return (
    <div className={styles.tc}>
      <div className={styles.tcChild} />
      <div className={styles.tcItem} />
      <div className={styles.tcInner} />
      <div className={styles.lineDiv} />
      <b className={styles.cryptohopper}>Cryptohopper</b>
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.rectangleDiv} />
      <div className={styles.groupParent}>
        <div className={styles.rectangleParent} onClick={onGroupContainerClick}>
          <div className={styles.groupChild} />
          <div className={styles.accept}>Accept</div>
        </div>
        <div className={styles.image30Parent}>
          <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
          <div className={styles.rectangleGroup}>
            <div className={styles.groupItem} />
            <div className={styles.accept}>Cancel</div>
          </div>
        </div>
      </div>
      <div className={styles.myWallet}>My Wallet</div>
      <div className={styles.groupContainer}>
        <div className={styles.jessicaGohWrapper}>
          <div className={styles.jessicaGoh}>Jessica Goh</div>
        </div>
        <img className={styles.image27Icon} alt="" src="/image-272@2x.png" />
      </div>
      <div className={styles.topPicksParent}>
        <div className={styles.topPicks}>Top Picks</div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupInner} />
            <b className={styles.stateAvenue}>State Avenue</b>
            <div className={styles.parent}>
              <div className={styles.div}>$ 400,000</div>
              <div className={styles.ether}>0.0000345 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild1} alt="" src="/vector-216.svg" />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild2} />
            <b className={styles.hopeShackUs}>Hope Shack US</b>
            <div className={styles.group}>
              <div className={styles.div1}>$ 500,000</div>
              <div className={styles.ether1}>0.0000678 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild3} alt="" src="/vector-226.svg" />
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild4} />
            <b className={styles.bourneRoad}>Bourne Road</b>
            <div className={styles.container}>
              <div className={styles.div2}>$ 786,000</div>
              <div className={styles.ether2}>0.0000887 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild5} alt="" src="/vector-218.svg" />
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.rectangleParent3}>
            <div className={styles.groupChild6} />
            <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
            <div className={styles.parent1}>
              <div className={styles.div3}>$ 90,000</div>
              <div className={styles.ether3}>0.0000761 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild7} alt="" src="/vector-227.svg" />
        </div>
        <div className={styles.groupParent4}>
          <div className={styles.rectangleParent4}>
            <div className={styles.groupChild8} />
            <b className={styles.anglesStatue}>Angles Statue</b>
            <div className={styles.parent2}>
              <div className={styles.div4}>$ 76,000</div>
              <div className={styles.ether4}>0.0000302 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild9} alt="" src="/vector-228.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent5}>
        <div className={styles.groupChild10} />
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        <div className={styles.balance}>Balance</div>
        <div className={styles.monthlyProfit}>Monthly Profit</div>
        <div className={styles.eth00000S000Container}>
          <p className={styles.eth00000}>ETH 0.0000</p>
          <p className={styles.eth00000}>S$0.00</p>
        </div>
        <div className={styles.div5}>$0.00</div>
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar36.svg" />
    </div>
  );
};

export default TC;
