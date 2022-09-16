import type { NextPage } from "next";
import { WelcomeStep } from "../components/steps/WelcomeStep";
import React, { createContext, useContext } from "react";
import { EnterNameStep } from "../components/steps/EnterNameStep";
import { GithubStep } from "../components/steps/GithubStep";
import { ChooseAvatarStep } from "../components/steps/ChooseAvatarStep";
import { EnterPhoneStep } from "../components/steps/EnterPhoneStep";
import { EnterCodeStep } from "../components/steps/EnterCodeStep";
import { userModel } from "../types/models/user";
import { type } from "os";
import { JSXElement } from "@typescript-eslint/types/dist/ast-spec";

type userContext = {
  user: Omit<userModel, "updatedAt" | "isActive" | "id" | "createdAt">;
  setUsername: () => void;
  setPhone: () => void;
};

const initialContext: userContext = {
  user: {
    username: "",
    phone: "",
    avatarUrl: "",
    fullname: "",
  },
  // setPhone: (value:string)=> {this.user.phone = value}
};
const stepsComponents: any = {
  0: WelcomeStep,
  1: GithubStep,
  2: ChooseAvatarStep,
  3: EnterNameStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

const Home: NextPage = () => {
  const [step, setStep] = React.useState<number>(0); // Шаги для определения степов регистрации!
  const CurrentStep = stepsComponents[step];

  const UserContext = createContext<userContext>(initialContext);

  return (
    <div>
      <UserContext.Provider value={initialContext}>
        <CurrentStep
          onNextStep={() => {
            setStep(step + 1);
          }}
        />
      </UserContext.Provider>
    </div>
  );
};

export default Home;
