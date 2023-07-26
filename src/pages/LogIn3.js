import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LogIn3.module.css";
const LogIn3 = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/main-page1");
  }, [navigate]);

  const onGroupContainerClick = useCallback(() => {
    navigate("/welcome-page1");
  }, [navigate]);

  return (
    <div className={styles.logIn3}>
      <b className={styles.logIn}>Log In</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame.svg"
        onClick={onFrameIconClick}
      />
      <div className={styles.textInput}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close2.svg" />
        </div>
        <div className={styles.content}>
          <img className={styles.tagIcon} alt="" src="/tag.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Jessica Goh</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput1}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close3.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>*************</div>
          </div>
        </div>
      </div>
      <div className={styles.logInParent} onClick={onGroupContainerClick}>
        <b className={styles.logIn1}>Log In</b>
        <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
      </div>
      <img className={styles.image27Icon} alt="" src="/image-27@2x.png" />
    </div>
  );
};

export default LogIn3;
