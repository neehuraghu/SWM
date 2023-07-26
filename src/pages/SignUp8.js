import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp8.module.css";
const SignUp8 = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/main-page1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/sign-up-4");
  }, [navigate]);

  return (
    <div className={styles.signUp8}>
      <b className={styles.verifyYourAccount}>Verify your account</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame.svg"
        onClick={onFrameIconClick}
      />
      <div
        className={styles.pleaseKeyIn}
      >{`Please key in the code that has been sent to your registered email: `}</div>
      <div className={styles.email}>
        <div className={styles.enterYourCode}>Enter your code</div>
        <div className={styles.textInput}>
          <div className={styles.textInputChild} />
          <div className={styles.icon}>
            <img className={styles.closeIcon} alt="" src="/close5.svg" />
          </div>
          <div className={styles.content}>
            <img className={styles.tagIcon} alt="" src="/tag2.svg" />
            <div className={styles.text}>
              <div className={styles.enterYourName}>Enter your name</div>
              <div className={styles.firstName}>340398</div>
            </div>
          </div>
          <div className={styles.heresAHint}>
            Add your email address to receive notifications about your activity
            on Foundation. This will not be shown on your profile.
          </div>
        </div>
      </div>
      <a
        className={styles.jessicagohnftforlifecom}
        href="mailto:jessicagoh@nftforlife.com"
        target="_blank"
      >
        jessicagoh@nftforlife.com
      </a>
      <div className={styles.backParent} onClick={onGroupContainerClick}>
        <b className={styles.back}>Back</b>
        <img className={styles.image26Icon} alt="" src="/image-262@2x.png" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupChild} />
        <b className={styles.verify}>Verify</b>
      </div>
      <img className={styles.image54Icon} alt="" src="/image-54@2x.png" />
    </div>
  );
};

export default SignUp8;
