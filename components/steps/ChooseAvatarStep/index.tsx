import React from 'react';
import clsx from 'clsx';
import {WhiteBlock} from '../../WhiteBlock';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo';
import {Avatar} from '../../Avatar';

import styles from './ChooseAvatarStep.module.scss';

interface ChooseAvatarStep {
    onNextStep: any
}

export const ChooseAvatarStep: React.FC<ChooseAvatarStep> = ({onNextStep}) => {
    const inputFileRef = React.useRef<HTMLInputElement>(null); //TODO ССЫЛКА НА ИНПУТ ДЛЯ ИЗОБРАЖЕНИЕ!!!
    const [AvatarUrl, setAvatarUrl] = React.useState<string>("https://sun9-88.userapi.com/impg/HkZdX8PtD1cQvzTFgu-1PHJJHbwHHQHEZqyoqA/Z5rucSYfULk.jpg?size=500x500&quality=95&sign=dfc6919a68b5bb04e91b073b54d05920&type=album");
    const handleChangeImage = (event: Event): void => {
        const file = (event.target as HTMLInputElement).files[0];
        if (file.type == ("image/jpeg" || "image/png" || "image/gif")) {
            const imageUrl = URL.createObjectURL(file); //TODO СОЗДАЕТ URL ФАЙЛА ВРЕМЕННО!!!
            setAvatarUrl(imageUrl);
        } else alert("The image must be in jpeg or png format");
    };

    React.useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeImage);
        }
    }, []);

    function nextStep() {
        onNextStep()
    }

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
                            src={AvatarUrl}/>
                </div>
                <div className="mb-30">
                    <label htmlFor="image" className="link cup">
                        Choose a different photo
                    </label>
                </div>
                <input ref={inputFileRef} id="image" type="file" hidden/>
                <Button onClick={nextStep}>
                    Next
                    <img className="d-ib ml-10" src="/static/arrow.svg"/>
                </Button>
            </WhiteBlock>
        </div>
    );
};
