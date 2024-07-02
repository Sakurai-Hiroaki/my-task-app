import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';
import { PlusCircle } from 'lucide-react';

const Column = ({ column, openAddModal, openEditModal, archiveTask }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg w-72 flex-shrink-0">
      <h2 className="font-bold mb-4 text-lg flex justify-between items-center">
        {column.title}
        <button
          onClick={() => openAddModal(column.id)}
          className="text-blue-500 hover:text-blue-700"
        >
          <PlusCircle size={20} />
        </button>
      </h2>
      <Droppable droppableId={column.id}>
        {(provided = {}) => (
          <ul 
            {...provided.droppableProps} 
            ref={provided.innerRef} 
            className="space-y-2 min-h-[100px]"
          >
            {column.tasks.map((task, index) => (
              <Task
                key={task.id}
                task={task}
                index={index}
                columnId={column.id}
                openEditModal={openEditModal}
                archiveTask={archiveTask}
              />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

export default Column;