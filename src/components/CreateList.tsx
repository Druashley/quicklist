import React from "react";
import { StyledCreateList } from "./styles/CreateList.styles";

interface Props {
  handleListName: (e: React.ChangeEvent<HTMLInputElement>) => void;
  newListName: string;
  createList: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const CreateList: React.FC<Props> = ({
  newListName,
  handleListName,
  createList,
}) => {
  return (
    <StyledCreateList>
      <input
        type="text"
        placeholder="New List Name..."
        value={newListName}
        onChange={handleListName}
      />
      <button onClick={createList}>Create List</button>
    </StyledCreateList>
  );
};

export default CreateList;
