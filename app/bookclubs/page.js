
import AllClubs from "../components/clubs/all-clubs"
import getBookclubs from "../get-requests/get-bookclubs"

export default async function AllClubsPage() {

    const bookclubs = await getBookclubs()


    return (
        <AllClubs bookclubs={bookclubs}/>
    )
}