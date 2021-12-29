import React from "react";

import { StyledListsMenu } from "./styles/ListsMenu.styled";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { List } from "../App";

interface Props {
  allLists: List[];
  setActiveList: React.Dispatch<React.SetStateAction<number | undefined>>;
}

const ListsMenu: React.FC<Props> = ({ allLists, setActiveList }) => {
  return (
    <StyledListsMenu>
      <Container>
        <Flex>
          {allLists.map((list) => (
            <div
              className="list-container"
              id="box"
              key={list.id}
              onClick={() => setActiveList(list.id)}
            >
              <h1>{list.name}</h1>
              <h2>Count: {list.items.length}</h2>
            </div>
          ))}
        </Flex>
      </Container>
    </StyledListsMenu>
  );
};

export default ListsMenu;
