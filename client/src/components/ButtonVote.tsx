import React, { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const ButtonVote: FC<{ id: string; side: string }> = ({ id, side }) => {
  const { changeCatImage } = useContext(StoreContext);
  const handleClick = () => {
    console.log(id);
    changeCatImage(side);
  };
  return <button onClick={handleClick}>ButtonVote </button>;
};

export default ButtonVote;
