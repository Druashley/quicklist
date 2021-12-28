import React, { useState } from "react";
import { List, Item } from "../App";

interface Props {
  activeList: number | undefined;
  setAllLists: React.Dispatch<React.SetStateAction<List[]>>;
  allLists: List[];
}

const AddItem: React.FC<Props> = ({
  activeList,

  setAllLists,
  allLists,
}) => {
  const [newItem, setNewItem] = useState<string>("");

  const handleNamechange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewItem(e.target.value);
  };

  const addItemToList = () => {
    // find the index in the array list that this item goes on
    let index = allLists.findIndex((list: List) => list.id === activeList);

    // handle error if we do not find
    if (index === -1) {
      console.log("Could not find list");
      // add error msg
    }

    // assigned  the object to the correctList variable
    let correctList: List = allLists[index];
    // set the new list newItem value with an ID
    let item: Item = {
      id: Math.random(),
      name: newItem,
    };
    // push the newItem to the correctList copy
    correctList.items.push(item);

    // map through each list and replace the new list copy with the correct list.

    let newLists = allLists.map((list) => {
      if (list.id === correctList.id) {
        return correctList;
      } else {
        return list;
      }
    });

    setAllLists(newLists);
    setNewItem("");
  };

  return (
    <div>
      {activeList && (
        <div>
          <input
            type="text"
            placeholder="Add to list..."
            value={newItem}
            onChange={handleNamechange}
          />
          <button onClick={addItemToList}>Add</button>
        </div>
      )}
    </div>
  );
};

export default AddItem;
