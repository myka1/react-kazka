const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  return (
    <div>
      <input placeholder="Search" onChange={(e) => onChange(e.target.value)} />
      <span className="searchBar" style={{ textShadow: "0.1px 0.5px" }}>
        Search Bar
      </span>
    </div>
  );
};

export default SearchBar;
