import React from 'react';
import {Header} from "../components/Header";
import {Button} from "../components/Button";
import {ConversationCard} from "../components/ConversationCart";

const RoomsPage: React.FC = () => {
    const Avatars = [
        "https://sun9-60.userapi.com/impg/jeXfQKE1Ur1hbY1O9ZlX4qR-od7S1nWP9FoXRQ/0g7ygxIa5PE.jpg?size=1620x2160&quality=96&sign=2e05d1c0a2e900fb1bb147719d5461c3&type=album",
        "https://cs12.pikabu.ru/post_img/2021/05/14/6/1620980169172670250.jpg",
    ]
    const guests = [
        'Давид Арзуманян',
        'Эвелина Тагирова',
    ]
    return (
        <div>
            <Header/>
            <div className="container">
                <div className="d-flex align-items-center justify-content-between mt-60">
                    <div className="d-flex justify-content-between align-items-center">
                        <h1 className="">
                            All conversations
                        </h1>
                        <Button className="ml-20" color={"gray"}>
                            Explore
                        </Button>
                    </div>
                    <Button color={"green"}>
                        Start a room
                    </Button>
                </div>
                <div className="d-flex justify-content-between flex-auto">
                    <ConversationCard title={'Как найти идеальную девушку?'} speakersCount={2} guestsCount={24}
                                      avatars={Avatars} guests={guests}/>
                </div>
            </div>
        </div>
    );
};

export default RoomsPage;
