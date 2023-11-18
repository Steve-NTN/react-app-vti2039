import { createContext, useContext, useState } from "react";

export const HomeContext = createContext();

export const useHome = () => useContext(HomeContext);

export const HomeProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(1);

  return (
    <HomeContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </HomeContext.Provider>
  );
};
