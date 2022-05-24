import { createContext, useEffect, useState } from "react";

export type ContextProps = { cats: object[] };

const StoreContext = createContext<ContextProps>({} as ContextProps);
interface props {
  children: JSX.Element | JSX.Element[];
}
const StoreProviderWrapper = ({ children }: props) => {
  const [cats, setCats] = useState<object[]>([]);
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

  return (
    <StoreContext.Provider
      value={{
        cats,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
