import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MekaVerseCheckoutPayment.module.css";
const MekaVerseCheckoutPayment = () => {
  const navigate = useNavigate();

  const onGroupContainer19Click = useCallback(() => {
    navigate("/mekaverse-successful");
  }, [navigate]);

  return (
    <div className={styles.mekaverseCheckoutPayment}>
      <div className={styles.mekaverseCheckoutPaymentChild} />
      <img
        className={styles.mekaverseCheckoutPaymentItem}
        alt=""
        src="/group-601.svg"
      />
      <div className={styles.mekaverseCheckoutPaymentInner} />
      <div className={styles.lineDiv} />
      <div className={styles.mekaverseCheckoutPaymentChild1} />
      <b className={styles.payment}>Payment</b>
      <img
        className={styles.moreHorizWhite24dp3Icon}
        alt=""
        src="/more-horiz-white-24dp-31.svg"
      />
      <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
      <div className={styles.rectangleDiv} />
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
            <div className={styles.groupChild} />
            <b className={styles.stateAvenue}>State Avenue</b>
            <div className={styles.parent}>
              <div className={styles.div}>$ 400,000</div>
              <div className={styles.ether}>0.0000345 Ether</div>
            </div>
          </div>
          <img className={styles.groupItem} alt="" src="/vector-223.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <b className={styles.hopeShackUs}>Hope Shack US</b>
            <div className={styles.group}>
              <div className={styles.div1}>$ 500,000</div>
              <div className={styles.ether1}>0.0000678 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild1} alt="" src="/vector-225.svg" />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleContainer}>
            <div className={styles.groupChild2} />
            <b className={styles.bourneRoad}>Bourne Road</b>
            <div className={styles.container}>
              <div className={styles.div2}>$ 786,000</div>
              <div className={styles.ether2}>0.0000887 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild3} alt="" src="/vector-218.svg" />
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild4} />
            <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
            <div className={styles.parent1}>
              <div className={styles.div3}>$ 90,000</div>
              <div className={styles.ether3}>0.0000761 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild5} alt="" src="/vector-28.svg" />
        </div>
        <div className={styles.groupParent3}>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild6} />
            <b className={styles.anglesStatue}>Angles Statue</b>
            <div className={styles.parent2}>
              <div className={styles.div4}>$ 76,000</div>
              <div className={styles.ether4}>0.0000302 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild7} alt="" src="/vector-29.svg" />
        </div>
      </div>
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild8} />
        <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
        <div className={styles.balance}>Balance</div>
        <div className={styles.monthlyProfit}>Monthly Profit</div>
        <div className={styles.eth00000S000Container}>
          <p className={styles.eth00000}>ETH 0.0000</p>
          <p className={styles.eth00000}>S$0.00</p>
        </div>
        <div className={styles.div5}>$0.00</div>
      </div>
      <div className={styles.rectangleParent4}>
        <div className={styles.groupChild9} />
        <div className={styles.groupChild10} />
        <b className={styles.checkout}>Checkout</b>
        <b className={styles.item}>Item</b>
        <b className={styles.subtotal}>Subtotal</b>
        <div
          className={styles.rectangleParent5}
          onClick={onGroupContainer19Click}
        >
          <div className={styles.groupChild11} />
          <b className={styles.purchase}>Purchase</b>
        </div>
      </div>
      <div className={styles.ownedByMatthey}>
        Owned by: Matthey and Matthieu Braccini
      </div>
      <b className={styles.mekaverse}>MekaVerse</b>
      <img className={styles.image33Icon} alt="" src="/image-331@2x.png" />
      <div className={styles.parent3}>
        <div className={styles.div6}>
          <span className={styles.span}>{`6.75 `}</span>
          <span className={styles.span1}>($11,641.66)</span>
        </div>
        <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
      </div>
      <div className={styles.mekaverseCheckoutPaymentChild2} />
      <div className={styles.parent4}>
        <div className={styles.div6}>
          <span className={styles.span}>
            <span>6.75</span>
          </span>
          <span className={styles.span3}>
            <span className={styles.span}>{` `}</span>
            <span>($11,641.66)</span>
          </span>
        </div>
        <img className={styles.image36Icon} alt="" src="/image-36@2x.png" />
      </div>
      <b className={styles.total}>Total</b>
      <img className={styles.sideBarIcon} alt="" src="/side-bar40.svg" />
    </div>
  );
};

export default MekaVerseCheckoutPayment;
