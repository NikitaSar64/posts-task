import { ISearchContext } from "@interfaces/interfaces";
import { createContext } from "react";

export const SearchContext = createContext<ISearchContext>({
  value: "",
  setValue: () => {},
});
