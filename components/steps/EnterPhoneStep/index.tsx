import React, { useContext, useState } from "react";
import clsx from "clsx";
import NumberFormat from "react-number-format";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterPhoneStep.module.scss";
import { MainContext } from "../../../pages";

export const EnterPhoneStep: React.FC = () => {
  const { setFieldValue, userData, onNextStep } = useContext(MainContext);
  const [formattedPhone, setFormattedPhone] = useState("");

  const onPhoneChange = (phone: string, formattedPhone: string) => {
    setFieldValue("phone", phone);
    setFormattedPhone(formattedPhone);
  };

  const nextDisabled = !userData?.phone || formattedPhone.includes("_");

  function nextStep() {
    onNextStep();
  }

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <WhiteBlock className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={clsx("mb-30", styles.input)}>
          <img src="/static/russian-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+7 (###) ###-##-##"
            mask="_"
            placeholder="+7 (999) 999-99-99"
            value={userData!.phone}
            onValueChange={({ formattedValue, value }) => {
              onPhoneChange(value, formattedValue);
            }}
          />
        </div>
        <Button disabled={nextDisabled} onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt=" →" />
        </Button>
        <p className={clsx(styles.policyText, "mt-30")}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </WhiteBlock>
    </div>
  );
};
