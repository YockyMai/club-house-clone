import type {NextPage} from 'next';
import {WelcomeStep} from "../components/steps/WelcomeStep";
import React from "react";
import {EnterNameStep} from "../components/steps/EnterNameStep";
import {TwitterStep} from "../components/steps/TwitterStep";
import {ChooseAvatarStep} from "../components/steps/ChooseAvatarStep";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep";
import {EnterCodeStep} from "../components/steps/EnterCodeStep";

const stepsComponents = {
    0: WelcomeStep,
    1: EnterNameStep,
    2: TwitterStep,
    3: ChooseAvatarStep,
    4: EnterPhoneStep,
    5: EnterCodeStep
}

const Home: NextPage = () => {
    const [step, setStep] = React.useState<number>(5); // Шаги для определения степов регистрации!
    let CurrentStep = stepsComponents[step];
    return (
        <div>
            <CurrentStep step={step} setStep={setStep}/>
        </div>
    );
};

export default Home;
