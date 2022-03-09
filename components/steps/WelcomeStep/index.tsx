import { WhiteBlock } from '../../WhiteBlock';
import { Button } from '../../Button';

import styles from './WelcomeStep.module.scss';
import React from 'react';

interface WelcomeStep {
  step: any,
  setStep:any
}

export const WelcomeStep: React.FC<WelcomeStep> = (step,setStep) => {
  function nextStep() {
    step.setStep(1)
  }

  return (
    <WhiteBlock className={styles.block}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="Celebration" />
        Welcome to Clubhouse!
      </h3>
      <p>
        We’re working hard to get Clubhouse ready for everyone! While we wrap up the finishing
        youches, we’re adding people gradually to make sure nothing breaks :)
      </p>
      <div>
        <Button onClick={nextStep}>
          Get your username
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">Have an invite text? Sign in</div>
    </WhiteBlock>
  );
};
