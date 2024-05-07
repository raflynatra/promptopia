"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Profile from "@/components/Profile";

const MyProfile = () => {
  const [prompts, setPrompts] = useState([]);

  const { data: session } = useSession();

  console.log(session?.user);

  useEffect(() => {
    const fetchPrompts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/prompts`);
      const data = await response.json();

      setPrompts(data);
    };

    if (session?.user?.id) fetchPrompts();
  }, [session?.user?.id]);

  const handleEdit = () => {};

  const handleDelete = () => {};

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page"
      data={prompts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
