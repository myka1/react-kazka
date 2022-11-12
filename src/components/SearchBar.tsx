const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  return <input onChange={(e) => onChange(e.target.value)} />;
};

export default SearchBar;
