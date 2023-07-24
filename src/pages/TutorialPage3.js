import { useState, useCallback } from "react";
import LatestNewsFrame1 from "../components/LatestNewsFrame1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import styles from "./TutorialPage3.module.css";
const TutorialPage3 = () => {
  const [isLatestNewsFrameOpen, setLatestNewsFrameOpen] = useState(false);
  const navigate = useNavigate();

  const onGroupContainer18Click = useCallback(() => {
    navigate("/tutorial-page-4");
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
      <div className={styles.tutorialPage3}>
        <img className={styles.image22Icon} alt="" src="/image-221@2x.png" />
        <b className={styles.blackpink}>BLACKPINK</b>
        <img className={styles.image44Icon} alt="" src="/image-44@2x.png" />
        <b className={styles.bts}>BTS</b>
        <div className={styles.tutorialPage3Child} />
        <div className={styles.tutorialPage3Item} />
        <img
          className={styles.tutorialPage3Inner}
          alt=""
          src="/vector-12.svg"
        />
        <div className={styles.myWallet}>My Wallet</div>
        <div className={styles.groupParent}>
          <div className={styles.jessicaGohWrapper}>
            <div className={styles.jessicaGoh}>Jessica Goh</div>
          </div>
          <img className={styles.image27Icon} alt="" src="/image-271@2x.png" />
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
            <img className={styles.vectorIcon} alt="" src="/vector-217.svg" />
          </div>
          <div className={styles.groupParent1}>
            <div className={styles.rectangleContainer}>
              <div className={styles.rectangleDiv} />
              <b className={styles.bourneRoad}>Bourne Road</b>
              <div className={styles.container}>
                <div className={styles.div2}>$ 786,000</div>
                <div className={styles.ether2}>0.0000887 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild1} alt="" src="/vector-218.svg" />
          </div>
          <div className={styles.groupParent2}>
            <div className={styles.rectangleParent1}>
              <div className={styles.groupChild2} />
              <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
              <div className={styles.parent1}>
                <div className={styles.div3}>$ 90,000</div>
                <div className={styles.ether3}>0.0000761 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild3} alt="" src="/vector-224.svg" />
          </div>
          <div className={styles.groupParent3}>
            <div className={styles.rectangleParent2}>
              <div className={styles.groupChild4} />
              <b className={styles.anglesStatue}>Angles Statue</b>
              <div className={styles.parent2}>
                <div className={styles.div4}>$ 76,000</div>
                <div className={styles.ether4}>0.0000302 Ether</div>
              </div>
            </div>
            <img className={styles.groupChild5} alt="" src="/vector-29.svg" />
          </div>
        </div>
        <div
          className={styles.rectangleParent3}
          onClick={onGroupContainer18Click}
        >
          <div className={styles.groupChild6} />
          <img className={styles.image29Icon} alt="" src="/image-29@2x.png" />
          <div className={styles.balance}>Balance</div>
          <div className={styles.monthlyProfit}>Monthly Profit</div>
          <div className={styles.eth00000S000Container}>
            <p className={styles.loveYourselfanswer}>ETH 0.0000</p>
            <p className={styles.loveYourselfanswer}>S$0.00</p>
          </div>
          <div className={styles.div5}>$0.00</div>
        </div>
        <div className={styles.image19Parent}>
          <img className={styles.image19Icon} alt="" src="/image-191@2x.png" />
          <div className={styles.searchParent}>
            <img className={styles.searchIcon} alt="" src="/search2.svg" />
            <img className={styles.micNoneIcon} alt="" src="/mic-none2.svg" />
            <div className={styles.searchAssetsAnd}>
              Search assets and items
            </div>
            <div className={styles.rectangleParent4}>
              <div className={styles.groupChild7} />
              <img className={styles.searchIcon1} alt="" src="/search2.svg" />
              <div className={styles.kPopAlbums}>K-Pop Albums</div>
            </div>
          </div>
          <div className={styles.invisible} />
        </div>
        <img className={styles.image43Icon} alt="" src="/image-43@2x.png" />
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
        <img className={styles.image37Icon} alt="" src="/image-37@2x.png" />
        <div className={styles.loveYourselfanswer0043Container}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>LOVE YOURSELF結‘ANSWER’</p>
            <p className={styles.loveYourselfanswer}>0.043 ETH</p>
          </span>
        </div>
        <div className={styles.blackpinkTheAlbumContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>BLACKPINK THE ALBUM</p>
            <p className={styles.loveYourselfanswer}>0.047 ETH</p>
          </span>
        </div>
        <div className={styles.blackpinkBornPinkContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>BLACKPINK: BORN PINK</p>
            <p className={styles.loveYourselfanswer}>0.061 ETH</p>
          </span>
        </div>
        <div className={styles.blackpinkSquareUpContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>BLACKPINK: SQUARE UP</p>
            <p className={styles.loveYourselfanswer}>0.035 ETH</p>
          </span>
        </div>
        <div className={styles.blackpinkKillThisContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>
              BLACKPINK: KILL THIS LOVE
            </p>
            <p className={styles.loveYourselfanswer}>0.043 ETH</p>
          </span>
        </div>
        <div className={styles.mapOfTheContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>MAP OF THE SOUL : 7</p>
            <p className={styles.loveYourselfanswer}>0.059 ETH</p>
          </span>
        </div>
        <div className={styles.proofWeAreContainer}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>
              PROOF: WE ARE BULLETPROOF
            </p>
            <p className={styles.loveYourselfanswer}>0.059 ETH</p>
          </span>
        </div>
        <div className={styles.loveYourselftear0039Container}>
          <span className={styles.loveYourselfanswer0043Container1}>
            <p className={styles.loveYourselfanswer}>LOVE YOURSELF轉‘TEAR’</p>
            <p className={styles.loveYourselfanswer}>0.039 ETH</p>
          </span>
        </div>
        <img className={styles.image45Icon} alt="" src="/image-45@2x.png" />
        <img className={styles.image38Icon} alt="" src="/image-38@2x.png" />
        <img className={styles.image39Icon} alt="" src="/image-39@2x.png" />
        <img className={styles.image40Icon} alt="" src="/image-40@2x.png" />
        <img className={styles.image41Icon} alt="" src="/image-41@2x.png" />
        <div className={styles.type}>
          <div className={styles.type1}>Type</div>
          <div className={styles.tokenParent}>
            <div className={styles.token}>
              <div className={styles.allItems}>All items</div>
            </div>
            <div className={styles.token1}>
              <div className={styles.allItems}>Game</div>
            </div>
            <div className={styles.token2}>
              <div className={styles.allItems}>Video</div>
            </div>
            <div className={styles.token3}>
              <div className={styles.allItems}>Animation</div>
            </div>
            <div className={styles.token4}>
              <div className={styles.allItems}>Photography</div>
            </div>
          </div>
        </div>
        <div className={styles.priceRange}>
          <div className={styles.priceRange1}>Price range</div>
          <div className={styles.slider}>
            <div className={styles.sliderChild} />
            <div className={styles.sliderItem} />
            <div className={styles.sliderInner} />
            <div className={styles.sliderChild1} />
            <img className={styles.polygonIcon} alt="" src="/polygon-5.svg" />
            <div className={styles.h1LargeTitle48pWrapper}>
              <b className={styles.h1LargeTitle}>50 ETH</b>
            </div>
          </div>
          <div className={styles.eth8}>0.01 ETH</div>
          <div className={styles.eth9}>100 ETH</div>
        </div>
        <div className={styles.button}>
          <img className={styles.closeIcon} alt="" src="/close16.svg" />
          <div className={styles.allItems}>Reset all filter</div>
        </div>
        <div className={styles.rectangleParent5}>
          <div className={styles.groupChild8} />
          <b className={styles.thereYouGoContainer}>
            <p className={styles.loveYourselfanswer}>
              There you go! The list of available K-Pop Album that is being
              tokenized from real albums assets! There is a filter on the right
              where you can narrow the options to the specific assets or NFTs
              that you are looking for.
            </p>
            <p className={styles.loveYourselfanswer}>&nbsp;</p>
            <p className={styles.loveYourselfanswer}>
              Next, we explore the list of wallets that you can add to purchase
              any NFTs or Tokenized Real World Assets at ChatNFT 3.0.
            </p>
            <p className={styles.loveYourselfanswer}>&nbsp;</p>
            <p className={styles.loveYourselfanswer}>
              Click the wallet on the right
            </p>
          </b>
        </div>
        <img className={styles.sideBarIcon} alt="" src="/side-bar21.svg" />
        <img className={styles.arrowIcon} alt="" src="/arrow-11.svg" />
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

export default TutorialPage3;
