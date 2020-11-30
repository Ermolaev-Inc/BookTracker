import React, { useState } from "react";
import s from "../styles/Main.module.sass";
import _ from "lodash";
import { DragDropContext, Droppable, Draggable, DropResult } from "react-beautiful-dnd";

import { MainProps } from "../propsInterfaces";

// TODO: Getting data from db
export const Main: React.FC<MainProps> = ({
  data
}) => {
  const [state, setState] = useState(data);

  const handleDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) {
      return;
    }
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    ) {
      return;
    }
    const itemCopy = { ...state[source.droppableId].items[source.index] };
    setState((prev) => {
      prev = { ...prev };
      prev[source.droppableId].items.splice(source.index, 1);
      prev[destination.droppableId].items.splice(
        destination.index,
        0,
        itemCopy
      );

      return prev;
    });
  };

  return (
    <div className={s.wrapper}> 
      <DragDropContext onDragEnd={handleDragEnd}>
        {_.map(state, (data, key) => {
          return (
            <div key={key} className={s.column}>
              <div style={{ fontWeight: 500, color: "#ff9627", fontSize: "24px" }}>{data.title}</div>
              <Droppable droppableId={key}>
                {(provided) => {
                  return (
                    <div
                      ref={provided.innerRef}
                      {...provided.droppableProps}
                      className={s.element}
                    >
                      {data.items.map((e, index) => {
                        return (
                          <Draggable
                            key={e._id}
                            index={index}
                            draggableId={e._id}
                          >
                            {(provided) => {
                              return (
                                <div
                                  className={s.elementD}
                                  ref={provided.innerRef}
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                >
                                  <span>{e.title}</span>
                                  <span>{e.author}</span>
                                </div>
                              );
                            }}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </div>
                  );
                }}
              </Droppable>
            </div>
          );
        })}
      </DragDropContext>
    </div>
  );
};