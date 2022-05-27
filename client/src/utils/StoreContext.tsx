import { createContext, useEffect, useState } from "react";
import { Cat } from "../interfaces";

export type ContextProps = {
  cats: Cat[];
  catLeft: Cat;
  catRight: Cat;
  changeCatImage: (side: string) => void;
};

const StoreContext = createContext<ContextProps>({} as ContextProps);
interface props {
  children: JSX.Element | JSX.Element[];
}
const StoreProviderWrapper = ({ children }: props) => {
  const [cats, setCats] = useState<Cat[]>([]);
  const [catLeft, setCatLeft] = useState<Cat>({ id: "", url: "" });
  const [catRight, setRight] = useState<Cat>({ id: "", url: "" });
  useEffect(() => {
    const x = async () => {
      try {
        const res = await fetch("https://latelier.co/data/cats.json");
        const data = await res.json();
        setCats(data.images);
        if (cats) {
          setRandomCat();
        }
      } catch (e) {
        console.error(e);
      }
    };
    x();
  }, []);
  useEffect(() => {
    setRandomCat();
  }, [cats]);
  const setRandomCat = () => {
    let catsRandom = [
      cats[Math.floor(Math.random() * cats.length)],
      cats[Math.floor(Math.random() * cats.length)],
    ];
    if (cats.length > 0 && catsRandom[0] === catsRandom[1] && catsRandom[0]) {
      setRandomCat();
    }
    setCatLeft(catsRandom[0]);
    setRight(catsRandom[1]);
    sendCatToDb(catsRandom[0]);
    sendCatToDb(catsRandom[1]);
  };
  const sendCatToDb = async (cat: Cat) => {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/cat/${cat?.id}`
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

  const changeCatImage = (side: string) => {
    let catRandom;
    if (side === "left") {
      catRandom = cats[Math.floor(Math.random() * cats.length)];
      console.log(catRandom);
      setCatLeft(catRandom);
      sendCatToDb(catRandom);
    } else {
      catRandom = cats[Math.floor(Math.random() * cats.length)];
      setRight(catRandom);
      sendCatToDb(catRandom);
    }
  };

  return (
    <StoreContext.Provider
      value={{
        cats,
        catLeft,
        catRight,
        changeCatImage,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
