import React from 'react';
import {Header} from "../../components/Header";
import Link from 'next/link';
import {Room} from '../../components/Room';
import clsx from "clsx";
import axios from "../../core/axios";

interface RoomProps {
    room: any
}

const RoomsPage: React.FC<RoomProps> = ({room}) => {
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
            </div>
            <Room room={room}/>
        </>
    );
};

export const getServerSideProps = async (context: any) => {
    try {
        const id = context.query.link // из контекста можно достать ссылку (resolvedLink) и Link (енд поинт ссылки)

        const {data} = await axios.get('/rooms.json')

        const room = data.find((obj: any) => obj.id === id)

        return {
            props: {
                room: room
            }
        }
    } catch (error) {
        alert('Упс, что то пошло не так, видимо комната уже не существует!');

        return {
            props: {}
        }
    }
}

export default RoomsPage;