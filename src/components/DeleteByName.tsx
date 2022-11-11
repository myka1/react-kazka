const DeleteByName = ({
  removeUserByName,
  nameToDelete,
  setNameToDelete,
}: {
  removeUserByName: (nameToDelete: string) => void;
  nameToDelete: string;
  setNameToDelete: (value: string) => void;
}) => {
  return (
    <form
      style={{ marginTop: "3rem" }}
      onSubmit={(e) => {
        e.preventDefault();
        removeUserByName(nameToDelete);
      }}
    >
      <input
        value={nameToDelete}
        onChange={(e) => setNameToDelete(e.target.value)}
      />
      <button>Delete Users By Name</button>
    </form>
  );
};

export default DeleteByName;
