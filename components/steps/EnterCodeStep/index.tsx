import React from 'react';
import clsx from 'clsx';
import {useRouter} from 'next/router';

import styles from './EnterPhoneStep.module.scss';
import {Button} from '../../Button';

export const EnterCodeStep = () => {
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        return (
            <div className={styles.block}>

                <StepInfo icon="/static/numbers.png" title="Enter your activate code"/>
                <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                    <div className={clsx('mb-30', styles.codeInput)}>
                        {codes.map((code, index) => (
                            <input
                                key={index}
                                type="tel"
                                placeholder="X"
                                maxLength={1}
                                id={String(index)}
                                onChange={handleChangeInput}
                                value={code}
                            />
                        ))}
                    </div>
                    <Button disabled={nextDisabled}>
                        Next
                        <img className="d-ib ml-10" src="/static/arrow.svg"/>
                    </Button>
                </WhiteBlock>
                )
            </div>
        );
    };
}