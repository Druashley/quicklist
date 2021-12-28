import React, { useState, useEffect } from "react";
import { List } from "../App";

interface Props {
  activeList: number | undefined;
  setAllLists: React.Dispatch<React.SetStateAction<List[]>>;
  allLists: List[];
}

const ActiveList: React.FC<Props> = ({ activeList, allLists, setAllLists }) => {
  const [currentList, setcurrentList] = useState<List>();

  useEffect(() => {
    let index = allLists.findIndex((list: List) => list.id === activeList);
    let correctList: List = allLists[index];

    if (activeList) {
      setcurrentList(correctList);
    }
  }, [activeList, allLists]);

  const removeItem = (id: number): void => {
    // filter the list against what is in the main state
    const newItemList = currentList?.items.filter((item) => item.id !== id);

    let updatedList: List = {
      id: currentList?.id!,
      name: currentList?.name!,
      items: newItemList!,
    };
    // allLists.filter((list) => list.id !== id);
    setcurrentList(updatedList);
    let newLists = allLists.map((list) => {
      if (list.id === updatedList.id) {
        return updatedList;
      } else {
        return list;
      }
    });

    setAllLists(newLists);
  };

  return (
    <div>
      {currentList && (
        <div>
          <div>current list name: {currentList.name}</div>
          <div>
            <ul>
              {currentList.items.map((item) => (
                <li key={item.id}>
                  <div>{item.name}</div>
                  <button value={item.id} onClick={() => removeItem(item.id)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ActiveList;
