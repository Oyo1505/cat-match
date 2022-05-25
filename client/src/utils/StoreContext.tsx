import { createContext, useEffect, useState } from "react";

export type ContextProps = {
  cats: object[];
  catLeft: object;
  catRight: object;
  changeCatImage: (side: string) => void;
};

const StoreContext = createContext<ContextProps>({} as ContextProps);
interface props {
  children: JSX.Element | JSX.Element[];
}
const StoreProviderWrapper = ({ children }: props) => {
  const [cats, setCats] = useState<object[]>([]);
  const [catLeft, setCatLeft] = useState<object>({ id: "", url: "" });
  const [catRight, setRight] = useState<object>({ id: "", url: "" });
  useEffect(() => {
    const x = async () => {
      try {
        const res = await fetch("https://latelier.co/data/cats.json");
        const data = await res.json();
        setCats(data.images);
      } catch (e) {
        console.error(e);
      }
    };
    x();
  }, []);
  useEffect(() => {
    if (cats.length > 0) {
      setCatLeft(cats[Math.floor(Math.random() * cats.length - 1)]);
      setRight(cats[Math.floor(Math.random() * cats.length - 1)]);
    }
  }, [cats]);

  const changeCatImage = (side: string) => {
    if (side === "left") {
      setCatLeft(cats[Math.floor(Math.random() * cats.length - 1)]);
    } else {
      setRight(cats[Math.floor(Math.random() * cats.length - 1)]);
    }
  };
  console.log(catLeft, catRight);
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
