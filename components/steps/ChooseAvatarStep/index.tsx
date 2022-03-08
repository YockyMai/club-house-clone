import React from 'react';
import clsx from 'clsx';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo';
import {Avatar} from '../../Avatar';

import styles from './ChooseAvatarStep.module.scss';


export const ChooseAvatarStep: React.FC = () => {
    const inputFileRef = React.useRef<HTMLInputElement>(null);

    const handleChangeImage = (event: Event): void => {

    };

    React.useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeImage);
        }
    }, []);

    return (
        <div className={styles.block}>
            <StepInfo
                icon="/static/celebration.png"
                title="Okay, Archakov Dennis!"
                description="How’s this photo?"
            />
            <WhiteBlock className={clsx('m-auto mt-40', styles.whiteBlock)}>
                <div className={styles.avatar}>
                    <Avatar width="120px" height="120px"
                            src="https://sun9-88.userapi.com/impg/HkZdX8PtD1cQvzTFgu-1PHJJHbwHHQHEZqyoqA/Z5rucSYfULk.jpg?size=500x500&quality=95&sign=dfc6919a68b5bb04e91b073b54d05920&type=album"/>
                </div>
                <div className="mb-30">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>
                <input id="image" type="file" hidden/>
                <Button>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg"/>
                </Button>
            </WhiteBlock>
        </div>
    );
};
