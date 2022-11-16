const SearchBar = ({ onChange }: { onChange: (query: string) => void }) => {
  return (
    <div>
      <input placeholder="Search" onChange={(e) => onChange(e.target.value)} />
      <span className="searchBar">Search Bar</span>
    </div>
  );
};

export default SearchBar;
