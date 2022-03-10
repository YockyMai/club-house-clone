import React from 'react';
import clsx from 'clsx';

import styles from './EnterPhoneStep.module.scss';
import {Button} from '../../Button';
import {StepInfo} from '../../StepInfo';
import {WhiteBlock} from '../../WhiteBlock';
import axios from '../../../core/axios';
import {AxiosResponse} from "axios";
import {useRouter} from "next/router";

export const EnterCodeStep = () => {
    const router = useRouter()
    const [loading, setLoading] = React.useState<boolean>(false);
    const [codes, setCodes] = React.useState(['', '', '', ''])

    let nextDisabled: boolean = !codes.every((value) => value != ''); // Проверка на заполнение кода

    //TODO Доделать инпут для взаимодействия с Backspace
    function handleChangeInput(e: React.ChangeEvent<HTMLInputElement>) {
        const id: number = e.target.id - 1; //Получил id каждого изменяемого инпута с помошбю метода e.target.id

        if (e.target.nextSibling) {
            (e.target.nextSibling as HTMLInputElement).focus();
        }

        setCodes((prev: any) => {
            const newArray = [...prev];
            newArray[id] = e.target.value;
            return newArray;
        });
    }

    const onSubmit = async () => {
        setLoading(true)
        try {
            await axios.get('/todos').then((response: AxiosResponse) => {
                setLoading(false);
                console.log(useRouter)
                router.push('/rooms');
            })
        } catch (error) {
            alert('Code is incorrect');
            setLoading(false)
        }
    }

    return (
        <div className={styles.block}>
            {!loading ?
                <>
                    <StepInfo icon="/static/numbers.png" title="Enter your activate code"/>
                    <WhiteBlock className={clsx('m-auto mt-30', styles.whiteBlock)}>
                        <div className={clsx('mb-30', styles.codeInput)}>
                            <input
                                type="tel"
                                placeholder="*"
                                maxLength={1}
                                id="1"
                                onChange={handleChangeInput}
                                value={codes[0]}
                            />
                            <input
                                type="tel"
                                placeholder="*"
                                maxLength={1}
                                id="2"
                                onChange={handleChangeInput}
                                value={codes[1]}
                            />
                            <input
                                type="tel"
                                placeholder="*"
                                maxLength={1}
                                id="3"
                                onChange={handleChangeInput}
                                value={codes[2]}
                            />
                            <input
                                type="tel"
                                placeholder="*"
                                maxLength={1}
                                id="4"
                                onChange={handleChangeInput}
                                value={codes[3]}
                            />
                        </div>
                        <Button onClick={onSubmit} disabled={nextDisabled}>
                            Next
                            <img className="d-ib ml-10" src="/static/arrow.svg"/>
                        </Button>
                    </WhiteBlock>
                </>
                :
                <div className="text-center m-auto">
                    <div className="loader">
                    </div>
                    <h3 className="mt-30">
                        Activation in progress...
                    </h3>
                </div>
            }
        </div>
    );

}