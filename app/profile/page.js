import { Fragment } from "react";
import EditProfileModal from "../components/modals/edit-profile";




export default function ProfilePage() {
    return (
        <Fragment>
            <h1> Profile Page</h1>
            <EditProfileModal />
        </Fragment>
    )
}