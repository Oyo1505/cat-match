import React, { FC, useContext, useEffect, useState } from "react";
import ImageCat from "./ImageCat";
import { Cat } from "../interfaces";
import ButtonVote from "./ButtonVote";

const RandomCat: FC<{ cat: Cat; side: string }> = ({ cat, side }) => {
  useEffect(() => {
    const x = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_BACKEND_URL}/cat/${cat.id}`
        );
        const data = await res.json();
        if (data.found === false) {
          await fetch(`${import.meta.env.VITE_BACKEND_URL}/cat`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(cat),
          });
        }
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
