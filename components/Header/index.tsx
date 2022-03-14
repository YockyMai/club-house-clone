import clsx from 'clsx';
import Link from 'next/link';
import React from 'react';
import {Avatar} from '../Avatar';

import styles from './Header.module.scss';

export const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className="container d-flex align-items-center justify-content-between">
                <Link href="/rooms" passHref>
                    <div className={clsx(styles.headerLogo, 'd-flex align-items-center cup')}>
                        <img src="/static/hand-wave.png" alt="Logo" className="mr-5"/>
                        <h4>Clubhouse</h4>
                    </div>
                </Link>
                <Link href="/profile/YockyMai" passHref>
                    <div className="d-flex align-items-center cup">
                        <b className="mr-5">Valeriy Grigorev</b>
                        <Avatar
                            src="https://sun9-88.userapi.com/impg/HkZdX8PtD1cQvzTFgu-1PHJJHbwHHQHEZqyoqA/Z5rucSYfULk.jpg?size=500x500&quality=95&sign=dfc6919a68b5bb04e91b073b54d05920&type=album"
                            width="50px"
                            height="50px"
                        />
                    </div>
                </Link>
            </div>
        </div>
    );
};
