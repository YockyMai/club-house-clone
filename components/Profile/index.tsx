import React from 'react';
import {useRouter} from "next/router";
import {Avatar} from "../../components/Avatar";
import {Button} from "../../components/Button";
import styles from "./profile.module.scss"
import clsx from "clsx";

interface ProfileProps {
    fullname: string,
    username: string,
    AvatarUrl: string,
    about: string,
    followers: number,
    following: number,
    userId: any
}

export const Profile: React.FC<ProfileProps> = ({fullname, username, AvatarUrl, about, followers, following, userId}) => {
    const router = useRouter();
    return (
        <div className="container">
            <h1 className="mt-50">Профиль пользователя {userId}</h1>
            <div className={clsx(styles.backBtn, 'd-flex align-items-center pointer ')}
                 onClick={() => router.push("/rooms")}
            >
                <img width="20px" height="25px" src="/static/back-arrow.svg" alt="back"/>
                <h3 className="ml-5">Back</h3>
            </div>
            <div className="userInfo d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center mt-30">
                    <Avatar
                        src={AvatarUrl}
                        width={"100px"} height={"100px"}/>
                    <div className="ml-30">
                        <h2>
                            {fullname}
                        </h2>
                        <h3 className={styles.userInfo__h3}>
                            {username}
                        </h3>
                    </div>
                    <Button color="blue" className={styles.followBtn}>Follow</Button>
                    <button className={styles.menu}>
                    </button>
                </div>
                <div className={styles.followerBlock}>
                    <div>
                        <h1>
                            {followers}
                        </h1>
                        <h3 className={styles.userInfo__h3}>
                            followers
                        </h3>
                    </div>
                    <div>
                        <h1>
                            {following}
                        </h1>
                        <h3 className={styles.userInfo__h3}>
                            following
                        </h3>
                    </div>
                </div>
            </div>
            <div className={styles.userAbout}>
                <p>
                    {about}
                </p>
            </div>
            <Avatar src="" width="150px" height="150px"/>
        </div>
    );
};
