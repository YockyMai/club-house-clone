import clsx from 'clsx';
import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterNameStep.module.scss';
import React from 'react';

interface EnterPhoneStepProps {
    onNextStep: any
}

export const EnterNameStep: React.FC<EnterPhoneStepProps> = ({onNextStep}) => {
  const [inputValue, setInputValue] = React.useState<string>('');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

    function nextStep() {
        onNextStep()
    }

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <WhiteBlock className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            onChange={handleChangeInput}
            value={inputValue}
            className="field"
            placeholder="Enter fullname"
          />
        </div>
        <Button onClick={nextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </WhiteBlock>
    </div>
  );
};
