import { Fragment } from "react";
import EditProfileModal from "../../components/modals/edit-profile";
import Image from "next/image";
import getCurrentUser from "../../actions/getCurrentUser";



export default async function ProfilePage() {
    
    const user = await getCurrentUser();

    
    return (
        <Fragment>
            <h1> Profile Page</h1>
            {user.image == null && <Image src='/../public/images/site/blank_profile_picture.jpg' alt={user.name} width={200} height={200} />}
            {user.image && <Image src={user.image} alt={user.name} width={200} height={200} />}
            <h2>Welcome {user.name}!</h2>
            <h5>{user.email}</h5>
            <EditProfileModal />
        </Fragment>

    )
}

