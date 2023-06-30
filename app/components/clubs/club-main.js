
import Image from 'next/image';
import Link from 'next/link';

import styles from './club-main.module.scss';


export default function ClubMain(props) {

    const { name, image, id } = props.bookclub;
    
    
    return (
        <Link href={`/bookclubs/${id}`} className={styles.link}>
            <h3 className={styles.title}>{name}</h3>
            <div>
                {!image ? 
                <Image src='/../public/static/images/no_image_available.jpg' alt='no image found' width={500} height={300} />:
                <Image src={image} alt={name} width={500} height={300} />}
            </div>
        </Link>
    )
}