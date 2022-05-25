import React, { FC, useContext, useEffect, useState } from "react";
import ImageCat from "./ImageCat";
import { Cat } from "../interfaces";
import ButtonVote from "./ButtonVote";

const RandomCat: FC<{ cat: Cat; side: string }> = ({ cat, side }) => {
  useEffect(() => {
    const x = async () => {
      try {
        const data = fetch(`${process.env.REACT_BACKEND_URL}/cat/${cat.id}`);
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
    x();
  }, []);
  return (
    <>
      <ImageCat image={cat.url} />
      <ButtonVote id={cat.id} side={side} />
    </>
  );
};

export default RandomCat;
