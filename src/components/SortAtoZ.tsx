const SortAtoZ = ({ sortAtoZ }: { sortAtoZ: () => void }) => {
  return (
    <div>
      <button onClick={() => sortAtoZ()}>Sort A-Z</button>
    </div>
  );
};

export default SortAtoZ;
