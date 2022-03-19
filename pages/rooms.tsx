import React from 'react';
import {Header} from "../components/Header";
import {Button} from "../components/Button";
import axios from "../core/axios";
import Link from "next/link";
import {ConversationCard} from '../components/ConversationCart';

interface RoomsPageProps {
    rooms: []
}

const RoomsPage: React.FC<RoomsPageProps> = ({rooms}) => {
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mt-60">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="">
                            All conversations
                        </h1>
                        <Button className="ml-20" color="gray">
                            Explore
                        </Button>
                    </div>
                    <Button color={"green"}>
                        Start a room
                    </Button>
                </div>
                <div className="mt-20 d-flex justify-content-between flex-auto wrap">
                    {rooms.map((obj: any) => {
                        return (
                            <Link href={`/rooms/${obj.id}`} passHref key={obj.id}>
                                <a>
                                    <ConversationCard title={obj.title}
                                                      speakersCount={obj.speakersCount}
                                                      guestsCount={obj.guestsCount}
                                                      avatars={obj.avatars} guests={obj.guests}
                                    />
                                </a>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export const getServerSideProps = async () => {
    try {
        const {data} = await axios.get('/rooms.json');
        return {
            props: {
                rooms: data
            }
        }
    } catch (error) {
        console.log(error)
        return {
            props: {
                rooms: {}
            }
        }
    }
}

export default RoomsPage;


