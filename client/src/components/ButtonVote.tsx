import React, { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const ButtonVote: FC<{ id: string; side: string }> = ({ id, side }) => {
  const { changeCatImage } = useContext(StoreContext);
  const contentType = "application/json";

  const upvote = async () => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/cat/upvote/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": contentType,
          },
          body: JSON.stringify({ id: id }),
        }
      );
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = () => {
    upvote();
    changeCatImage(side);
  };
  return <button onClick={handleClick}>ButtonVote</button>;
};

export default ButtonVote;
