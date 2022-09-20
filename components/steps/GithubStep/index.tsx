import React, { useContext, useEffect } from "react";
import clsx from "clsx";
import { WhiteBlock } from "../../WhiteBlock";
import { Button } from "../../Button";
import { StepInfo } from "../../StepInfo";
import styles from "./GithubStep.module.scss";
import { BsGithub } from "react-icons/bs";
import { userModel } from "../../../types/models/user";
import { MainContext } from "../../../pages";
import Cookies from "js-cookie";

interface GitHubAuthRes extends userModel {
  token: string;
}

export const GithubStep: React.FC = () => {
  const { onNextStep, setUserData } = useContext(MainContext);

  function nextStep() {
    onNextStep();
  }

  const openGitHubWindow = () => {
    window.open(
      "http://localhost:3001/auth/github",
      "GitHub authentication...",
      "width=900,height=900"
    );
  };

  useEffect(() => {
    const handleMessage = ({ data }: MessageEvent<GitHubAuthRes>) => {
      if (data.username) {
        setUserData({
          username: data.username,
          phone: data.phone,
          avatarUrl: data.avatarUrl,
          fullname: data.username,
        });
        Cookies.set("token", `Bearer ${data.token}`);
        console.log(data);
        onNextStep();
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/connect.png"
        title="Do you want import info from Twitter?"
      />
      <WhiteBlock className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>YI</b>
          <svg
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 50C0.5 30.5091 3.25846 18.1987 10.7286 10.7286C18.1987 3.25846 30.5091 0.5 50 0.5C69.4909 0.5 81.8014 3.25846 89.2714 10.7286C96.7415 18.1987 99.5 30.5091 99.5 50C99.5 69.4909 96.7415 81.8014 89.2714 89.2714C81.8014 96.7415 69.4909 99.5 50 99.5C30.5091 99.5 18.1987 96.7415 10.7286 89.2714C3.25846 81.8014 0.5 69.4909 0.5 50Z"
              fill="#E0E0E0"
              stroke="#D6D6D6"
            />
          </svg>
        </div>
        <h2 className="mb-40">Your info</h2>
        <Button onClick={openGitHubWindow}>
          <BsGithub size={22} className={styles.githubLogo} />
          Import from GitHub
          <img className="d-ib ml-10" src="/static/arrow.svg" alt=" →" />
        </Button>
        <div onClick={nextStep} className="link mt-20 cup d-ib">
          Enter my info manually
        </div>
      </WhiteBlock>
    </div>
  );
};
