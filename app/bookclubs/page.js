
import AllClubs from "../components/clubs/all-clubs"
import getBookclubs from "../actions/get-bookclubs"
import { Fragment } from "react"
import CreateClubModal from "../components/modals/create-club"

export default async function AllClubsPage() {

    const bookclubs = await getBookclubs()


    return (
        <Fragment>
            <AllClubs bookclubs={bookclubs}/>
            <CreateClubModal />
        </Fragment>

    )
}