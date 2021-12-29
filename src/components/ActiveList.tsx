import React, { useState, useEffect } from "react";
import { List } from "../App";
import { StyledActiveList } from "./styles/ActiveList.style";
import { Container } from "./styles/Container.styled";

interface Props {
  activeList: number | undefined;
  setActiveList: React.Dispatch<React.SetStateAction<number | undefined>>;
  setAllLists: React.Dispatch<React.SetStateAction<List[]>>;
  allLists: List[];
}

const ActiveList: React.FC<Props> = ({
  activeList,
  setActiveList,
  allLists,
  setAllLists,
}) => {
  const [currentList, setcurrentList] = useState<List>();
  const [deletePrompt, setDeletePrompt] = useState<boolean>(false);

  useEffect(() => {
    let index = allLists.findIndex((list: List) => list.id === activeList);
    let correctList: List = allLists[index];
    setDeletePrompt(false);
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

  const removeList = (id: number): void => {
    const newLists = allLists.filter((list) => list.id !== id);
    setAllLists(newLists);
    setDeletePrompt(false);
    setActiveList(undefined);
  };

  const confirmDelete = (id: number): JSX.Element => {
    return (
      <div>
        <button className="confirm" onClick={() => removeList(id)}>
          Delete List
        </button>
        <button className="deny" onClick={() => setDeletePrompt(false)}>
          Don't Delete List
        </button>
      </div>
    );
  };

  return (
    <StyledActiveList>
      {currentList && (
        <Container>
          <h1>
            <span onClick={() => setDeletePrompt(true)}>
              {currentList.name}
            </span>
            {deletePrompt && confirmDelete(currentList.id)}
          </h1>
          <div>
            <ul>
              {currentList.items.map((item) => (
                <li key={item.id}>
                  <div className="name">{item.name}</div>
                  <button value={item.id} onClick={() => removeItem(item.id)}>
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      )}
    </StyledActiveList>
  );
};

export default ActiveList;
