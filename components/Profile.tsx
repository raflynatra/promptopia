import React, { FC } from "react";
import PromptCard from "./PromptCard";

interface ProfileProps {
  name: string;
  desc: string;
  data: {
    _id: string;
    prompt: string;
    tag: string;
    creator: {
      image: string;
      username: string;
      email: string;
      _id: string;
    };
  }[];
  handleEdit: () => void;
  handleDelete: () => void;
}

const Profile: FC<ProfileProps> = ({
  name,
  desc,
  data,
  handleDelete,
  handleEdit,
}) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((prompt) => (
          <PromptCard
            key={prompt._id}
            prompt={prompt}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
