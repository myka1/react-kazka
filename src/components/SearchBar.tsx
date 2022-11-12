const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  return (
    <div>
      <input onChange={(e) => onChange(e.target.value)} />
      <span> Search Bar</span>
    </div>
  );
};

export default SearchBar;
