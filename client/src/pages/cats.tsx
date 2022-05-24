import React, { FC, useContext } from "react";
import { StoreContext } from "../utils/StoreContext";

const Cats: FC = () => {
  const { cats } = useContext(StoreContext);
  console.log(cats);
  return <div>cats</div>;
};

export default Cats;
