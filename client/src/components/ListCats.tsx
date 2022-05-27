import React, { FC, useEffect, useState } from "react";
import { CatDb } from "../interfaces";

const ListCats: FC = () => {
  const [cats, setCats] = useState<CatDb[]>();
  useEffect(() => {
    const x = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/cats`);
        const data = await res.json();
        setCats(data);
        console.log(cats);
      } catch (error) {}
    };
    x();
  }, []);
  if (cats?.length === 0) return <p>No cats</p>;
  return (
    <ul>
      {cats?.map((el: CatDb) => (
        <li>
          <img src={el.url} width="50px" height="50px" /> {el.upvote}
        </li>
      ))}
    </ul>
  );
};

export default ListCats;
