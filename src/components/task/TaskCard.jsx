import React, { useState } from "react";
import { Draggable } from "react-beautiful-dnd";
import { TaskCardDeleteButton } from "./button/TaskCardDeleteButton";
import { TaskAddInput } from "./input/TaskAddInput";
import { TaskCardTitle } from "./TaskCardTitle";
import { Tasks } from "./Tasks";

export const TaskCard = ({
    taskCardsList,
    setTaskCardsList,
    taskCard,
    index,
}) => {

 const [inputText, setInputText] = useState("");
 const [taskList, setTaskList] = useState([]);

    return (
        <Draggable draggableId={taskCard.id} index={index}>
            {(provided) => (
                <div
                    className="taskCard"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    // {...provided.dragHandleProps} //実際につかむ要素につける 
                >
                    <div
                        className="taskCardTitleAndTaskCardDeleteButtonArea"
                        {...provided.dragHandleProps} //こちらにつけるとタイトルのみ掴める
                    >
            <TaskCardTitle />
            <TaskCardDeleteButton
                taskCardsList={taskCardsList}
                setTaskCardsList={setTaskCardsList}
                taskCard={taskCard}
            />
            </div>
            <TaskAddInput
               inputText={inputText}
               setInputText={setInputText}
               setTaskList={setTaskList}
               taskList={taskList}
            />
            <Tasks
               inputText={inputText}
               taskList={taskList}
               setTaskList={setTaskList}
            />
            </div>
            )}  
         </Draggable>
   
    );
};