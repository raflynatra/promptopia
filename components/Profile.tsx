import React, { FC } from "react";
import PromptCard from "./PromptCard";
import { TPrompt } from "@/types/type";

interface ProfileProps {
  name: string;
  desc: string;
  data: TPrompt[];
  handleEdit: (prompt: TPrompt) => void;
  handleDelete: (prompt: TPrompt) => void;
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
