import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MAINPAGE.module.css";
const MAINPAGE = () => {
  const navigate = useNavigate();

  const onGetStartedContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onLoginButtonContainerClick = useCallback(() => {
    navigate("/log-in");
  }, [navigate]);

  const onSignUpContainerClick = useCallback(() => {
    navigate("/sign-up");
  }, [navigate]);

  const onImage19Click = useCallback(() => {
    navigate("/frame-15");
  }, [navigate]);

  return (
    <div className={styles.mainPage}>
      <img className={styles.image22Icon} alt="" src="/image-22@2x.png" />
      <div className={styles.theFutureIs}>
        The future is here, explore the endless possibilities to tokenize your
        Real-World Assets
      </div>
      <div className={styles.mainPageChild} />
      <div className={styles.ownTheFutureContainer}>
        <span>{`Own the future of `}</span>
        <span className={styles.creativity}>creativity</span>
        <span> within your reach</span>
      </div>
      <div className={styles.wantToStartContainer}>
        <p className={styles.wantToStartTokenizingYour}>
          <span>
            <span>{`Want to start tokenizing your Real-World Assets but `}</span>
            <span className={styles.dontKnowWhere}>don’t know where</span>
            <span>{`? `}</span>
          </span>
        </p>
        <p className={styles.wantToStartTokenizingYour}>
          <span>
            <span>{`Don’t worry, it is easy as `}</span>
            <span className={styles.dontKnowWhere}>1, 2, 3.0</span>
          </span>
        </p>
        <p className={styles.signUpAnAccountAndGoThro}>
          <span>
            <span>{`Sign up an account and go through `}</span>
            <span className={styles.dontKnowWhere}>guided</span>
            <span className={styles.and}>{` and `}</span>
            <span className={styles.dontKnowWhere}>easy-to-use</span>
            <span className={styles.and}> platform with ChatNFT 3.0</span>
          </span>
        </p>
      </div>
      <div className={styles.mainPageItem} />
      <img className={styles.mainPageInner} alt="" src="/line-10.svg" />
      <div className={styles.lineDiv} />
      <img className={styles.vectorIcon} alt="" src="/vector-1.svg" />
      <div className={styles.topPicksParent}>
        <div className={styles.topPicks}>Top Picks</div>
        <div className={styles.groupParent}>
          <div className={styles.rectangleParent}>
            <div className={styles.groupChild} />
            <b className={styles.stateAvenue}>State Avenue</b>
            <div className={styles.parent}>
              <div className={styles.div}>$ 400,000</div>
              <div className={styles.ether}>0.0000345 Ether</div>
            </div>
          </div>
          <img className={styles.groupItem} alt="" src="/vector-2.svg" />
        </div>
        <div className={styles.groupContainer}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupInner} />
            <b className={styles.hopeShackUs}>Hope Shack US</b>
            <div className={styles.group}>
              <div className={styles.div1}>$ 500,000</div>
              <div className={styles.ether1}>0.0000678 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild1} alt="" src="/vector-21.svg" />
        </div>
        <div className={styles.groupDiv}>
          <div className={styles.rectangleContainer}>
            <div className={styles.rectangleDiv} />
            <b className={styles.bourneRoad}>Bourne Road</b>
            <div className={styles.container}>
              <div className={styles.div2}>$ 786,000</div>
              <div className={styles.ether2}>0.0000887 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild2} alt="" src="/vector-22.svg" />
        </div>
        <div className={styles.groupParent1}>
          <div className={styles.rectangleParent1}>
            <div className={styles.groupChild3} />
            <b className={styles.monoaLisa}>{`Monoa Lisa `}</b>
            <div className={styles.parent1}>
              <div className={styles.div3}>$ 90,000</div>
              <div className={styles.ether3}>0.0000761 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild4} alt="" src="/vector-23.svg" />
        </div>
        <div className={styles.groupParent2}>
          <div className={styles.rectangleParent2}>
            <div className={styles.groupChild5} />
            <b className={styles.anglesStatue}>Angles Statue</b>
            <div className={styles.parent2}>
              <div className={styles.div4}>$ 76,000</div>
              <div className={styles.ether4}>0.0000302 Ether</div>
            </div>
          </div>
          <img className={styles.groupChild6} alt="" src="/vector-24.svg" />
        </div>
      </div>
      <div className={styles.getStarted} onClick={onGetStartedContainerClick}>
        <div className={styles.getStartedChild} />
        <div className={styles.signUpWrapper}>
          <div className={styles.signUp}>Sign up</div>
        </div>
      </div>
      <img className={styles.image21Icon} alt="" src="/image-21@2x.png" />
      <img className={styles.image23Icon} alt="" src="/image-23@2x.png" />
      <div className={styles.instagramTwitterDiscordContainer}>
        <p className={styles.wantToStartTokenizingYour}>Instagram</p>
        <p className={styles.wantToStartTokenizingYour}>Twitter</p>
        <p className={styles.wantToStartTokenizingYour}>Discord</p>
        <p className={styles.wantToStartTokenizingYour}>&nbsp;</p>
      </div>
      <div className={styles.aboutCommunityGuidelinesContainer}>
        <p className={styles.wantToStartTokenizingYour}>About</p>
        <p className={styles.wantToStartTokenizingYour}>Community Guidelines</p>
        <p className={styles.wantToStartTokenizingYour}>Terms of Service</p>
        <p className={styles.wantToStartTokenizingYour}>Privacy</p>
        <p className={styles.wantToStartTokenizingYour}>Careers</p>
        <p className={styles.wantToStartTokenizingYour}>Help</p>
      </div>
      <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
      <div className={styles.rectangleParent3}>
        <div className={styles.groupChild7} />
        <img className={styles.searchIcon} alt="" src="/search.svg" />
        <img className={styles.micNoneIcon} alt="" src="/mic-none.svg" />
        <div className={styles.searchAssetsAnd}>Search assets and items</div>
      </div>
      <div className={styles.loginButtonParent}>
        <div
          className={styles.loginButton}
          onClick={onLoginButtonContainerClick}
        >
          <div className={styles.loginButtonChild} />
          <div className={styles.login}>Login</div>
        </div>
        <div className={styles.signUp1} onClick={onSignUpContainerClick}>
          <div className={styles.signUpChild} />
          <div className={styles.signUp2}>Sign Up</div>
        </div>
        <img
          className={styles.image19Icon}
          alt=""
          src="/image-24@2x.png"
          onClick={onImage19Click}
        />
        <div className={styles.invisible} />
      </div>
      <img className={styles.sideBarIcon} alt="" src="/side-bar.svg" />
    </div>
  );
};

export default MAINPAGE;
