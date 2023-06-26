
import Image from 'next/image';
import Link from 'next/link';

import styles from './club-main.module.scss';


export default function ClubMain(props) {

    const { name, image, id } = props.bookclub;
    
    
    return (
        <section className={styles.header}>
            <Link href={`/bookclubs/${id}`} >
                <h2>{name}</h2>
                <div className={styles.image}>
                    {!image ? 
                    <Image src='/../public/images/site/no_image_available.jpg' alt='no image found' width={500} height={300} />:
                    <Image src={image} alt={name} width={200} height={300} />}
                </div>
            </Link>
        </section>
    )
}