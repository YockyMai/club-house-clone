import React from 'react';
import {useRouter} from "next/router";
import {Avatar} from "../../components/Avatar";

export default function ProfilePage() {
    const router = useRouter();
    const {id} = router.query;

    function back() {
        router.back()
    }

    return (
        <div className="pr-100 pt-100 pb-100 pl-100">
            <h1>Профиль пользователя {id}</h1>
            <div onClick={back} className="d-flex align-items-center pointer">
                <img width="20px" height="25px" src="/static/back-arrow.svg" alt="back"/>
                <h3 className="ml-5">Back</h3>
            </div>
            <div className="userInfo d-flex align-items-center justify-content-between">
                <div className="d-flex mt-30">
                    <Avatar
                        src={"https://sun9-88.userapi.com/impg/HkZdX8PtD1cQvzTFgu-1PHJJHbwHHQHEZqyoqA/Z5rucSYfULk.jpg?size=500x500&quality=95&sign=dfc6919a68b5bb04e91b073b54d05920&type=album"}
                        width={"100px"} height={"100px"}/>
                    <div className="ml-30">
                        <h2>
                            Valeriy Grigorev
                        </h2>
                        <h3>
                            @yockymai
                        </h3>
                    </div>

                </div>
                <div className="d-flex justify-content-between p-20 followInfo">
                    <div>
                        <h1>
                            2
                        </h1>
                        <h3>
                            followers
                        </h3>
                    </div>
                    <div>
                        <h1>
                            2
                        </h1>
                        <h3>
                            following
                        </h3>
                    </div>
                </div>
            </div>
            <div className="user-about">
                <h4>
                    Kakaya-to ochen vazhnaya informaciya o moev profile

                    I have my personal site archakov.im and Telegram blog - t.me/archakov_im
                </h4>
            </div>
            <Avatar src="" width="150px" height="150px"/>
        </div>
    );
};
