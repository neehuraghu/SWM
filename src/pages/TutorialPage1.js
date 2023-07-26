import { useState, useCallback } from "react";
import LatestNewsFrame1 from "../components/LatestNewsFrame1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage1.module.css";
const TutorialPage1 = () => {
  const [isLatestNewsFrameOpen, setLatestNewsFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onRectangle12Click = useCallback(() => {
    console.log("onRectangle12Click");
    navigate("/tutorial-page-2");
  }, [navigate]);

  const onImage35Click = useCallback(() => {
    navigate("/latest-news-frame1");
  }, [navigate]);

  const openLatestNewsFrame = useCallback(() => {
    setLatestNewsFrameOpen(true);
  }, []);

  const closeLatestNewsFrame = useCallback(() => {
    setLatestNewsFrameOpen(false);
  }, []);

  return (
    <>
      <div className={styles.tutorialPage}>
        <img className={styles.image22Icon} alt="" src="/image-221@2x.png" />
        <div className={styles.tutorialPageChild} />
        <div className={styles.tutorialPageItem} />
        <div className={styles.whatsHotNowContainer}>
          <span>{`What’s `}</span>
          <span className={styles.hot}>Hot</span>
          <span> now?</span>
        </div>
        <div className={styles.investmentStatsParent}>
          <div className={styles.investmentStats}>Investment Stats</div>
          <div className={styles.groupChild} />
          <div className={styles.groupParent}>
            <div className={styles.totalInvestmentParent}>
              <div className={styles.totalInvestment}>Total Investment</div>
              <img className={styles.groupItem} alt="" src="/group-1110.svg" />
              <div className={styles.ethWrapper}>
                <div className={styles.eth}>0.00 ETH</div>
              </div>
            </div>
            <div className={styles.weeklyReturnsParent}>
              <div className={styles.weeklyReturns}>Weekly Returns</div>
              <img className={styles.groupItem} alt="" src="/group-1111.svg" />
              <div className={styles.ethContainer}>
                <div className={styles.eth1}>0.00 ETH</div>
              </div>
            </div>
            <div className={styles.min}>Min</div>
            <div className={styles.max}>Max</div>
            <div className={styles.expensesParent}>
              <div className={styles.expenses}>Expenses</div>
              <img className={styles.groupItem} alt="" src="/group-1112.svg" />
              <div className={styles.ethFrame}>
                <div className={styles.eth2}>0.00 ETH</div>
              </div>
            </div>
            <img className={styles.groupChild1} alt="" src="/group-164.svg" />
          </div>
        </div>
        <div className={styles.tutorialPageInner} />
        <div className={styles.maskGroupParent}>
          <div className={styles.maskGroup} />
          <div className={styles.myPortfolioParent}>
            <div className={styles.myPortfolio}>My Portfolio</div>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.thereAreNoneHereStartInvWrapper}>
                <div className={styles.thereAreNone}>
                  There are none here. Start Investing to add one!
                </div>
              </div>
            </div>
            <div className={styles.rectangleGroup}>
              <div className={styles.groupChild2} />
              <div className={styles.totalDistributions}>
                Total Distributions
              </div>
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
          </div>
        </div>
        <img className={styles.vectorIcon} alt="" src="/vector-12.svg" />
        <div className={styles.rectangleContainer}>
          <img
            className={styles.rectangleIcon}
            alt=""
            src="/rectangle-293@2x.png"
          />
          <div className={styles.groupChild3} />
          <img className={styles.starIcon} alt="" src="/star-1.svg" />
          <img className={styles.groupChild4} alt="" src="/star-1.svg" />
          <img className={styles.groupChild5} alt="" src="/star-1.svg" />
          <img className={styles.groupChild6} alt="" src="/star-4.svg" />
          <img className={styles.groupChild7} alt="" src="/star-5.svg" />
          <b className={styles.bourneRoad}>Bourne Road</b>
          <div className={styles.eth00000887}>ETH 0.0000887</div>
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.groupChild8} />
          <img className={styles.groupChild9} alt="" src="/star-4.svg" />
          <img className={styles.groupChild10} alt="" src="/star-4.svg" />
          <img className={styles.groupChild11} alt="" src="/star-1.svg" />
          <img className={styles.groupChild12} alt="" src="/star-1.svg" />
          <img className={styles.groupChild13} alt="" src="/star-51.svg" />
          <b className={styles.bourneRoad}>Blue Mona Lisa</b>
          <div className={styles.eth00000887}>ETH 0.00495</div>
          <img className={styles.image32Icon} alt="" src="/image-32@2x.png" />
        </div>
        <div className={styles.myWallet}>My Wallet</div>
        <div className={styles.groupContainer}>
          <div className={styles.jessicaGohWrapper}>
            <div className={styles.jessicaGoh}>Jessica Goh</div>
          </div>
          <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
        </div>
        <div className={styles.topPicksParent}>
          <div className={styles.topPicks}>Top Picks</div>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild14} />
              <b className={styles.stateAvenue}>State Avenue</b>
              <div className={styles.parent}>
                <div className={styles.div4}>$ 400,000</div>
                <div className={styles.ether}>0.0000345 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild15} alt="" src="/vector-216.svg" />
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild16} />
              <b className={styles.hopeShackUs}>Hope Shack US</b>
              <div className={styles.group}>
                <div className={styles.div5}>$ 500,000</div>
                <div className={styles.ether1}>0.0000678 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild17} alt="" src="/vector-217.svg" />
          </div>
          <div className={styles.groupParent3}>
            <div className={styles.rectangleParent3}>
              <div className={styles.groupChild18} />
              <b className={styles.bourneRoad1}>Bourne Road</b>
              <div className={styles.container}>
                <div className={styles.div6}>$ 786,000</div>
                <div className={styles.ether2}>0.0000887 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild19} alt="" src="/vector-218.svg" />
          </div>
          <div className={styles.groupParent4}>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild20} />
              <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
              <div className={styles.parent1}>
                <div className={styles.div7}>$ 90,000</div>
                <div className={styles.ether3}>0.0000761 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild21} alt="" src="/vector-219.svg" />
          </div>
          <div className={styles.groupParent5}>
            <div className={styles.rectangleParent5}>
              <div className={styles.groupChild22} />
              <b className={styles.anglesStatue}>Angles Statue</b>
              <div className={styles.parent2}>
                <div className={styles.div8}>$ 76,000</div>
                <div className={styles.ether4}>0.0000302 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild23} alt="" src="/vector-220.svg" />
          </div>
        </div>
        <div className={styles.rectangleParent6}>
          <div className={styles.groupChild24} />
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          <div className={styles.balance}>Balance</div>
          <div className={styles.monthlyProfit}>Monthly Profit</div>
          <div className={styles.eth00000S000Container}>
            <p className={styles.startInvestingTo}>ETH 0.0000</p>
            <p className={styles.startInvestingTo}>S$0.00</p>
          </div>
          <div className={styles.div9}>$0.00</div>
        </div>
        <div className={styles.image19Parent} onClick={onRectangle12Click}> 
          <img className={styles.image19Icon} alt="" src="/image-19@2x.png" onClick={onRectangle12Click}/>
          <div className={styles.rectangleParent7} onClick={onRectangle12Click}>
            <div className={styles.groupChild25} onClick={onRectangle12Click} />
            <img className={styles.searchIcon} alt="" src="/search2.svg" />
            <img className={styles.micNoneIcon} alt="" src="/mic-none2.svg" />
            <div className={styles.searchAssetsAnd}>
              Search assets and items
            </div>
          </div>
          <div className={styles.invisible} />
        </div>
        <div className={styles.nftsOwnedParent}>
          <div className={styles.nftsOwned}>NFTs owned</div>
          <div className={styles.groupChild26} />
          <div className={styles.thereAreNoneContainer}>
            <p className={styles.startInvestingTo}>{`There are none here. `}</p>
            <p className={styles.startInvestingTo}>
              Start investing to add one!
            </p>
          </div>
        </div>
        <div className={styles.latestCryptoNews}>Latest Crypto News</div>
        <div className={styles.broughtToYou}>Brought to you by CoinDesk</div>
        <img
          className={styles.image35Icon}
          alt=""
          src="/image-351@2x.png"
          onClick={onImage35Click}
        />
        <img
          className={styles.image34Icon}
          alt=""
          src="/image-341@2x.png"
          onClick={openLatestNewsFrame}
        />
        <img className={styles.arrowIcon} alt="" src="/arrow-1.svg" />
        <div className={styles.rectangleParent8}>
          <div className={styles.groupChild27} />
          <b className={styles.welcomeToYourContainer}>
            <p className={styles.startInvestingTo}>
              Welcome to your very own ChatNFT 3.0 account!
            </p>
            <p className={styles.startInvestingTo}>&nbsp;</p>
            <p className={styles.startInvestingTo}>
              Here you can see your investments, viewed assets and dashboard!
              Everything you need is here to tokenize your Real-World Assets or
              invest in one!
            </p>
            <p className={styles.startInvestingTo}>&nbsp;</p>
            <p
              className={styles.startInvestingTo}
            >{`This tutorial allows you to get a guided tour around our web-page and understand the various functions that is available for your own use as well! `}</p>
            <p className={styles.startInvestingTo}>&nbsp;</p>
            <p className={styles.startInvestingTo}>
              Let’s start off with viewing some tokenized Real-World assets!
            </p>
            <p className={styles.startInvestingTo}>
              Click on the search bar above.
            </p>
          </b>
        </div>
        <img className={styles.sideBarIcon} alt="" src="/side-bar19.svg" />
      </div>
      {isLatestNewsFrameOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeLatestNewsFrame}
        >
          <LatestNewsFrame1 onClose={closeLatestNewsFrame} />
        </PortalPopup>
      )}
    </>
  );
};

export default TutorialPage1;
