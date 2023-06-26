
import ClubContent from "../../components/clubs/club-content"
import getBookclubsById from "../../get-requests/get-bookclubs-Id"


export default async function ClubPage(id) {

    const bookclub = await getBookclubsById(id)
    
    
    return (
       <ClubContent bookclub={bookclub}/>
    )
}