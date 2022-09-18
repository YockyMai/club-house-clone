import type { NextPage } from "next";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import React, { createContext } from "react";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { GithubStep } from "../components/steps/GithubStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";
import { userModel } from "../types/models/user";

type UserData = Omit<userModel, "updatedAt" | "isActive" | "id" | "createdAt">;

type MainContextProps = {
  onNextStep: () => void;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
  setFieldValue: (field: keyof UserData, value: string) => void;
  step: number;
  userData?: UserData;
};

const initialUserData: UserData = {
  fullname: "",
  avatarUrl: "",
  phone: "",
  username: "",
};

export const MainContext = createContext<MainContextProps>(
  {} as MainContextProps
);

const stepsComponents: any = {
  0: WelcomeStep,
  1: GithubStep,
  2: EnterNameStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

const Home: NextPage = () => {
  const [step, setStep] = React.useState<number>(0); // Шаги для определения степов регистрации!
  const [userData, setUserData] = React.useState<UserData>(
    initialUserData as UserData
  );
  const CurrentStep = stepsComponents[step];

  const setFieldValue = (field: keyof UserData, value: string) => {
    setUserData((prevState: any) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const onNextStep = () => {
    setStep((prevState) => prevState + 1);
  };

  return (
    <div>
      <MainContext.Provider
        value={{ step, onNextStep, setFieldValue, userData, setUserData }}
      >
        <CurrentStep
          onNextStep={() => {
            setStep(step + 1);
          }}
        />
      </MainContext.Provider>
    </div>
  );
};

export default Home;
