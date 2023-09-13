"use client";

import styles from "@/components/ui/modal.module.scss";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import Modal from "../ui/Modal";

export default function CreateClubModal() {
  const router = useRouter();
  const [data, setData] = useState({
    name: "",
    location: "",
    genre: "",
    description: "",
    image: "",
    creatorId: "",
  });

  async function getCreator() {
    const currentUser = await useSession();
    console.log(currentUser.id);
    return setData((prevData) => ({
      ...prevData,
      creatorId: currentUser.id,
    }));
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    getCreator();
  };

  const createClub = async (e) => {
    e.preventDefault();
    console.log(data);
    axios
      .post("/api/bookclubs", data)
      .then(() => {
        toast.success("You created a new club!");
        router.push("/mybookclubs");
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <Modal>
      <Modal.Button>Create Bookclub</Modal.Button>
      <Modal.Content title="Create New Bookclub">
        <form className={styles.form} onSubmit={createClub}>
          <label className={styles.label} htmlFor="name">
            Name
          </label>
          <input
            className={styles.input}
            id="name"
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="location">
            Location
          </label>
          <input
            className={styles.input}
            id="location"
            type="text"
            name="location"
            value={data.location}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="genre">
            Genre
          </label>
          <input
            className={styles.input}
            id="genre"
            type="text"
            name="genre"
            value={data.genre}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="description">
            Description
          </label>
          <input
            className={styles.input}
            id="description"
            type="text"
            name="description"
            value={data.description}
            onChange={handleChange}
          />
          <label className={styles.label} htmlFor="image">
            Image
          </label>
          <input
            className={styles.input}
            id="image"
            type="text"
            name="image"
            value={data.image}
            onChange={handleChange}
          />
          <button className={styles.button}>Create</button>
        </form>
      </Modal.Content>
    </Modal>
  );
}
