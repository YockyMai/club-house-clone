import React from 'react';
import {useRouter} from "next/router";
import {Header} from "../../components/Header";
import Link from 'next/link';
import {Room} from '../../components/Room';
import clsx from "clsx";

const RoomsPage: React.FC = () => {
    const router = useRouter();
    const {id} = router.query;

    function back() {
        router.back()
    }

    return (
        <>
            <Header/>
            <div className="container">
                <Link href="/rooms" passHref>
                    <a className={clsx("pt-100 ml-30")}>
                        <h2 className="d-flex">
                            <img className="mr-10" src="/static/back-arrow.svg" alt="back-arrow" width="20"/>
                            Leave
                        </h2>
                    </a>
                </Link>
                <Room title="Как найти девушку"/>
            </div>
        </>
    );
};

export default RoomsPage;