import type {NextPage} from 'next';
import Head from 'next/head';
import {WelcomeStep} from "../components/steps/WelcomeStep";
import {WhiteBlock} from "../components/steps/WhiteBlock";
import {EnterPhoneStep} from "../components/steps/EnterPhoneStep";

const Home: NextPage = () => {
    return (
        <div>

            <EnterPhoneStep/>
        </div>
    );
};

export default Home;
