import React, { useState } from "react";

//Components
import CreateList from "./components/CreateList";
import ListsMenu from "./components/ListsMenu";
import AddItem from "./components/AddItem";
import ActiveList from "./components/ActiveList";
// import { Sortable } from "./components/DND/Sortable";

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
    setNewListName(e.target.value.trim());
  };
  const createList = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // Button inside the CreateList Componet - When clicked - creates a new list with no items. Math.random is being used for ID atm.
    let newList: List = {
      id: Math.random(),
      name: newListName,
      items: [],
    };
    setAllLists([...allLists, newList]);
    setNewListName("");
  };
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
      <AddItem
        activeList={activeList}
        allLists={allLists}
        setAllLists={setAllLists}
      />
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
