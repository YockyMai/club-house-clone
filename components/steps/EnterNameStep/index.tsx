import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterNameStep.module.scss";
import React, { useContext } from "react";
import { MainContext } from "../../../pages";

export const EnterNameStep: React.FC = () => {
  const { onNextStep, setFieldValue, userData } = useContext(MainContext);

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFieldValue("fullname", event.target.value);
  };

  function nextStep() {
    onNextStep();
  }

  const nextDisabled: boolean = userData!.fullname.length <= 3;

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx("m-auto", styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={handleChangeInput}
            value={userData?.fullname}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button disabled={nextDisabled} onClick={nextStep}>
          Next
          <img alt=" →" className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
