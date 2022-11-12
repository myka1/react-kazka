import { useCallback, useState } from "react";
import SearchBar from "../components/SearchBar";

export const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const SearchBarElement = useCallback(
    () => <SearchBar onChange={setSearchQuery} />,
    []
  );

  return { searchQuery, SearchBarElement };
};
