"use client";

import { useState, useEffect, ChangeEvent, FC } from "react";
import PromptCard from "./PromptCard";

interface PromptCardListProps {
  data: {
    _id: string;
    prompt: string;
    tag: string;
    creator: {
      image: string;
      username: string;
      email: string;
    };
  }[];
  handleTagClick: () => void;
}

const PromptCardList: FC<PromptCardListProps> = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((prompt) => (
        <PromptCard key={prompt._id} prompt={prompt} />
      ))}
    </div>
  );
};

const Feed = () => {
  const [searchText, setSearchText] = useState("");
  const [prompts, setPrompts] = useState([]);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };

  useEffect(() => {
    const fetchPrompt = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setPrompts(data);
    };

    fetchPrompt();
  }, []);

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={prompts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;
