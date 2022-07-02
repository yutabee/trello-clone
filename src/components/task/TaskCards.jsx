import React, { useState } from "react"
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { AddTaskCardButton } from "./button/AddTaskCardButton"
import { TaskCard } from "./TaskCard"

export const TaskCards = () => {

    const [taskCardsList, setTaskCardsList] = useState([
        {
            id: "0",
            draggableId: "item0",
        }
    ]);

    const reorder = (taskCardsList, startIndex, endIndex) => {
        //タスクを並び変える。
        const remove = taskCardsList.splice(startIndex, 1); //[2,3] 
        taskCardsList.splice(endIndex, 0, remove[0]); //[2,1,3]
    };

    const handleDragEnd = (result) => {
          reorder(taskCardsList, result.source.index, result.destination.index);
          setTaskCardsList(taskCardsList);
    };

    return (
        <DragDropContext
            onDragEnd={handleDragEnd}
        >
            <Droppable droppableId="droppable" direction="horizontal">
                {(provided) => (
                    <div
                        className="taskCardsArea"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {taskCardsList.map((taskCard,index) => (
                    <TaskCard
                        key={taskCard.id}
                        index={index}        
                        taskCardsList={taskCardsList}
                        setTaskCardsList={setTaskCardsList}
                        taskCard={taskCard}
                    />
                ))}
                <AddTaskCardButton
                    taskCardsList={taskCardsList}
                    setTaskCardsList={setTaskCardsList}
                        />
                {provided.placeholder}
                </div>
            )}
            </Droppable>
        </DragDropContext>
    );
};