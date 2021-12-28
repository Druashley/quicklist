import React from "react";
import { List } from "../App";

interface Props {
  allLists: List[];
  setActiveList: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ListsMenu: React.FC<Props> = ({ allLists, setActiveList }) => {
  return (
    <div>
      {allLists.map((list) => (
        <div key={list.id} onClick={() => setActiveList(list.id)}>
          <div>{list.name}</div>
          <div>Count: {list.items.length}</div>
        </div>
      ))}
    </div>
  );
};

export default ListsMenu;
