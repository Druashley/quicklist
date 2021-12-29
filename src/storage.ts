import { List } from "./App";

export const saveLocalLists = (allLists: List[]): void => {
  localStorage.setItem("Lists", JSON.stringify(allLists));
};

export const getLocalLists = (
  setAllLists: React.Dispatch<React.SetStateAction<List[]>>
): void => {
  if (localStorage.getItem("Lists") === null) {
    localStorage.setItem("Lists", JSON.stringify([]));
  } else {
    let listsLocal = JSON.parse(localStorage.getItem("Lists")!);
    setAllLists(listsLocal);
  }
};
