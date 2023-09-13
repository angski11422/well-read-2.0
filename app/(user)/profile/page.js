"use client";

import EditProfileModal from "../../components/user/edit-profile";
import Image from "next/image";
import styles from "../../page.module.scss";
import { useSession } from "next-auth/react";

export default async function ProfilePage() {
  const { data: session } = await useSession();

  return (
    <div className={styles.profile}>
      <h1> Profile Page</h1>

      {session.user.image == null && (
        <Image
          src="/../public/static/images/blank_profile_picture.jpg"
          alt={session.user.name}
          width={200}
          height={200}
        />
      )}
      {session.user.image && (
        <Image
          src={session.user.image}
          alt={session.user.name}
          width={200}
          height={200}
        />
      )}
      <h2>Welcome {session.user.name}!</h2>
      <h5>{session.user.email}</h5>
      <EditProfileModal />
    </div>
  );
}
