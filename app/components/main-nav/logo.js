import Image from 'next/image';


export default function Logo() {
    return (
        <div>
            <Image src='/../public/static/images/logo.png' alt='well read logo' width={185} height={155}/>
        </div>
    )
}