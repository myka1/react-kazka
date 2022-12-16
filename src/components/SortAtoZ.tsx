const SortAtoZ = ({
  sortAtoZ,
  sortZtoA,
  sortById,
  sortByIdReverse,
}: {
  sortAtoZ: () => void;
  sortZtoA: () => void;
  sortById: () => void;
  sortByIdReverse: () => void;
}) => {
  return (
    <div>
      <button onClick={() => sortAtoZ()}>Sort A-Z</button>
      <button onClick={() => sortZtoA()}>Sort Z-A</button>
      <button onClick={() => sortById()}>Sort by ID</button>
      <button onClick={() => sortByIdReverse()}>Sort by ID reverse</button>
    </div>
  );
};

export default SortAtoZ;
