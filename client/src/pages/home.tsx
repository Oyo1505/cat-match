import React, { FC, useContext } from "react";
import RandomCat from "../components/RandomCat";
import { StoreContext } from "../utils/StoreContext";
const Home: FC = () => {
  const { catLeft, catRight } = useContext(StoreContext);
  return (
    <div>
      <RandomCat cat={catLeft} side={"left"} />
      <RandomCat cat={catRight} side={"right"} />
    </div>
  );
};

export default Home;
