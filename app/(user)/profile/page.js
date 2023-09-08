import EditProfileModal from "../../components/modals/edit-profile";
import Image from "next/image";
import getCurrentUser from "../../actions/getCurrentUser";
import styles from "../../page.module.scss";

export default async function ProfilePage() {
  const user = await getCurrentUser();

  return (
    <div className={styles.profile}>
      <h1> Profile Page</h1>
      {user.image == null && (
        <Image
          src="/../public/static/images/blank_profile_picture.jpg"
          alt={user.name}
          width={200}
          height={200}
        />
      )}
      {user.image && (
        <Image src={user.image} alt={user.name} width={200} height={200} />
      )}
      <h2>Welcome {user.name}!</h2>
      <h5>{user.email}</h5>
      <EditProfileModal />
    </div>
  );
}
