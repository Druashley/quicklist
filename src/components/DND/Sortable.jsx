import React from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { SortableItem } from "./SortableItem";

export const Sortable = ({
  activeList,
  allLists,
  setAllLists,
  items,
  setItems,
}) => {
  // const [items, setItems] = useState([]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  // useEffect(() => {
  //   // this use effect sets the items on a list if / when the list changes
  //   if (activeList) {
  //     let index = allLists.findIndex((list) => list.id === activeList);

  //     if (index === -1) {
  //       console.log("Could not find list");
  //       // add error msg
  //     }

  //     let correctList = allLists[index];

  //     setItems(correctList.listItems);

  //     // if (correctList.listItems !== items) {
  //     //   console.log("This list has changed");
  //     // }
  //   }
  // }, [activeList, allLists, items]);

  // useEffect(() => {
  //   // this useEffect makes the data match how the user sorts it.
  //   if (items && items.length > 0) {
  //     let copyOfActiveList = activeList;
  //     copyOfActiveList.listItems = items;
  //     setActiveList(copyOfActiveList);
  //   }
  // }, [items, setActiveList]);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((id) => (
          <SortableItem key={id} id={id} />
        ))}
      </SortableContext>
    </DndContext>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        // let newList = {
        //   id: activeList.id,
        //   name: activeList.name,
        //   listItems: arrayMove(items, oldIndex, newIndex),
        // };
        // setActiveList(newList);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
};
