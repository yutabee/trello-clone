import React from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { Task } from './Task'

export const Tasks = ({ taskList, setTaskList }) => {

const reorder = (taskList, startIndex, endIndex) => {
  //タスクを並び変える。
  const remove = taskList.splice(startIndex, 1); //[2,3] 
  taskList.splice(endIndex, 0, remove[0]); //[2,1,3]
};
    
const handleDrangEnd = (result) => { 
    reorder(taskList, result.source.index, result.destination.index);
    setTaskList(taskList);
  };

  return (
      <div>
          <DragDropContext onDragEnd={handleDrangEnd}> 
              <Droppable droppableId='dropabble'>
                    {(provided) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                        {taskList.map((task, index) => (
                            <div key={task.id}> {/* mapで用意する要素にはkeyを与えないとエラーになる */}
                            <Task
                                index={index}
                                task={task}
                                taskList={taskList}
                                setTaskList={setTaskList}
                            />
                            </div>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}     
              </Droppable>
          </DragDropContext>
    </div>
  )
}