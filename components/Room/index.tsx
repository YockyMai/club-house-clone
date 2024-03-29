import clsx from "clsx";
import Link from "next/link";
import React from "react";
import { Button } from "../Button";

import styles from "./Room.module.scss";

interface RoomProps {
  room: {
    guests: [];
    title: string;
  };
}

export const Room: React.FC<RoomProps> = ({ room }) => {
  const speakers: [] = room.guests;
  console.log(speakers);
  return (
    <div className={styles.wrapper}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 style={{ maxWidth: "80%" }}>{room.title}</h2>
        <div
          className={clsx("d-flex align-items-center", styles.actionButtons)}
        >
          <Link href="/rooms" passHref>
            <a>
              <Button color="gray" className={styles.leaveButton}>
                <img
                  width={18}
                  height={18}
                  src="/static/peace.png"
                  alt="Hand black"
                />
                Leave quietly
              </Button>
            </a>
          </Link>
        </div>
      </div>
      <div>
        <h2>Гости :</h2>
        <div className="ml-10">
          {speakers.map((obj, index) => {
            return <h4 key={index}>{obj}</h4>;
          })}
        </div>
      </div>
      <div className="users">{}</div>
    </div>
  );
};
