import React, { useState, useEffect } from "react";

//Components
import CreateList from "./components/CreateList";
import ListsMenu from "./components/ListsMenu";
import AddItem from "./components/AddItem";
import ActiveList from "./components/ActiveList";

import { saveLocalLists, getLocalLists } from "./storage";
// Styles
import { GlobalStyle } from "./components/styles/Global.styles";
import { StyledLogo } from "./components/styles/Logo.styled";

export interface Item {
  id: number;
  name: string;
}

export interface List {
  id: number;
  name: string;
  items: Item[];
}

const App: React.FC = () => {
  const [newListName, setNewListName] = useState<string>("");
  const [allLists, setAllLists] = useState<List[]>([]);
  const [activeList, setActiveList] = useState<number>();

  const handleListName = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Sets the new list in the CreateList Component.
    setNewListName(e.target.value);
  };
  const createList = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // Button inside the CreateList Componet - When clicked - creates a new list with no items. Math.random is being used for ID atm.
    let newList: List = {
      id: Math.random(),
      name: newListName.trim(),
      items: [],
    };
    setAllLists([...allLists, newList]);
    setNewListName("");
  };
  useEffect(() => {
    // at the start of the app running grabs all local storage lists
    getLocalLists(setAllLists);
  }, []);

  useEffect(() => {
    // sets local storage any time the list changes. Could be problematic if the user had large amounts of data, but seems fine for this small project.
    saveLocalLists(allLists);
  }, [allLists]);

  return (
    <div className="App">
      <GlobalStyle />
      <StyledLogo>Quick List</StyledLogo>
      <CreateList
        handleListName={handleListName}
        createList={createList}
        newListName={newListName}
      />
      <ListsMenu allLists={allLists} setActiveList={setActiveList} />

      {activeList && (
        <ActiveList
          activeList={activeList}
          setActiveList={setActiveList}
          allLists={allLists}
          setAllLists={setAllLists}
        />
      )}
    </div>
  );
};

export default App;
