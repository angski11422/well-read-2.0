// individual club info on all club page (limited detail)
// attached to club grid
import Link from 'next/link';
import Image from 'next/image';

import styles from './club-item.module.scss';


export default function ClubItem(props) {
    const { name, image, location, description, id } = props.bookclub;
    const linkPath = `/bookclubs/${id}`;
    return (
        <li className={styles.club}>
            <Link href={linkPath}>
                <div className={styles.image}>
                    <Image src={image} alt={name} width={300} height={200}/>
                </div>
                <div className={styles.content}>
                    <h4>{name}</h4>
                    <h6>{location}</h6>
                    <p>{description}</p>
                </div>
            </Link>
        </li>
    )
}