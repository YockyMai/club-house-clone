import React, { useContext } from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";
import { Avatar } from "../../Avatar";
import styles from "./ChooseAvatarStep.module.scss";
import { MainContext } from "../../../pages";
import avatarUpload from "../../../api/user/avatarUpload";
import { getAvatarUrl } from "../../../helpers/getImageUrls";

interface ChooseAvatarStep {
  onNextStep: any;
}

export const ChooseAvatarStep: React.FC<ChooseAvatarStep> = ({
  onNextStep,
}) => {
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const { setFieldValue, userData } = useContext(MainContext);

  const handleChangeImage = (event: Event): void => {
    const file = (event.target as any).files[0];
    if (file)
      avatarUpload(file)
        .then((url) => {
          setFieldValue("avatarUrl", getAvatarUrl(url, "origin"));
          (event.target as HTMLInputElement).value = "";
        })
        .catch((err) => alert(err));
  };

  React.useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener("change", handleChangeImage);
    }

    return () => {
      removeEventListener("change", handleChangeImage);
    };
  }, []);

  function nextStep() {
    onNextStep();
  }

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title={`Okay, ${userData?.fullname}`}
        description="How’s this photo?"
      />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar
            width="120px"
            height="120px"
            src={
              userData?.avatarUrl
                ? userData.avatarUrl
                : "/static/empty-avatar.png"
            }
          />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input ref={inputFileRef} id="image" type="file" hidden />

        <Button onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
