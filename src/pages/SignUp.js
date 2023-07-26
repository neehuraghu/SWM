import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./SignUp.module.css";
const SignUp = () => {
  const navigate = useNavigate();

  const onFrameIconClick = useCallback(() => {
    navigate("/main-page1");
  }, [navigate]);

  const onTextInputContainerClick = useCallback(() => {
    navigate("/sign-up-5");
  }, [navigate]);

  return (
    <div className={styles.signUp}>
      <b className={styles.signUp1}>Sign Up</b>
      <img className={styles.image17Icon} alt="" src="/image-17@2x.png" />
      <img
        className={styles.frameIcon}
        alt=""
        src="/frame.svg"
        onClick={onFrameIconClick}
      />
      <div className={styles.upload}>
        <div className={styles.uploadAProfile}>Upload a profile image.</div>
        <div className={styles.upload1}>
          <div className={styles.uploadChild} />
          <div className={styles.dragAndDropOrBrowceAFileParent}>
            <b className={styles.dragAndDropContainer}>
              <span className={styles.dragAndDropContainer1}>
                {`Drag and drop or `}
                <span className={styles.browce}>browce</span> a file
              </span>
            </b>
            <div className={styles.recommendedSizeJpg}>
              Recommended size: JPG, PNG, GIF (1500x1500px, Max 10mb)
            </div>
            <img className={styles.imageIcon} alt="" src="/image.svg" />
          </div>
        </div>
      </div>
      <div className={styles.enterYourDetails}>Enter your details</div>
      <div className={styles.textInput} onClick={onTextInputContainerClick}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close2.svg" />
        </div>
        <div className={styles.content}>
          <img className={styles.tagIcon} alt="" src="/tag1.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Username</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput1}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close4.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag1.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Password</div>
          </div>
        </div>
      </div>
      <div className={styles.textInput2}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close4.svg" />
        </div>
        <div className={styles.content1}>
          <img className={styles.tagIcon} alt="" src="/tag1.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Confirm Password</div>
          </div>
        </div>
      </div>
      <div className={styles.email}>
        <div className={styles.enterYourEmail}>Enter your email</div>
        <div className={styles.textInput3}>
          <div className={styles.rectangleDiv} />
          <div className={styles.icon3}>
            <img className={styles.closeIcon} alt="" src="/close5.svg" />
          </div>
          <div className={styles.content3}>
            <img className={styles.tagIcon} alt="" src="/tag2.svg" />
            <div className={styles.text}>
              <div className={styles.enterYourName}>Enter your name</div>
              <div className={styles.firstName}>Email</div>
            </div>
          </div>
          <div className={styles.heresAHint}>
            Add your email address to receive notifications about your activity
            on Foundation. This will not be shown on your profile.
          </div>
        </div>
      </div>
      <div className={styles.bio}>
        <div className={styles.enterYourBio}>Enter your bio</div>
        <div className={styles.form}>
          <div className={styles.typeHere}>Enter your bio here</div>
          <img className={styles.formChild} alt="" src="/group-1.svg" />
        </div>
      </div>
      <div className={styles.addLinksTo}>Add links to your social media</div>
      <div className={styles.textInput4}>
        <div className={styles.textInputChild} />
        <div className={styles.icon}>
          <img className={styles.closeIcon} alt="" src="/close6.svg" />
        </div>
        <div className={styles.content4}>
          <img className={styles.closeIcon} alt="" src="/link.svg" />
          <div className={styles.text}>
            <div className={styles.enterYourName}>Enter your name</div>
            <div className={styles.firstName}>Website</div>
          </div>
        </div>
      </div>
      <div className={styles.nextParent}>
        <b className={styles.next}>Next</b>
        <img className={styles.image26Icon} alt="" src="/image-261@2x.png" />
      </div>
      <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
    </div>
  );
};

export default SignUp;
