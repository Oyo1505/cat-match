import { createContext } from "react";

export type ContextProps = { name: string };

const StoreContext = createContext<ContextProps>({} as ContextProps);
interface props {
  children: JSX.Element | JSX.Element[];
}
const StoreProviderWrapper = ({ children }: props) => {
  return (
    <StoreContext.Provider
      value={{
        name: "d",
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContext, StoreProviderWrapper };
