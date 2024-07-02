import { Draggable } from 'react-beautiful-dnd';
import { Edit, Archive } from 'lucide-react';

const Task = ({ task, index, columnId, openEditModal, archiveTask }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="bg-white p-2 rounded shadow cursor-move hover:shadow-md transition-shadow duration-200"
        >
          <div className="flex justify-between items-start">
            <div className="w-full">
              <p>{task.content}</p>
              <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
              {task.note && (
                <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-700 border border-gray-200">
                  {task.note}
                </div>
              )}
            </div>
            <div className="flex space-x-2 ml-2">
              <button
                onClick={() => openEditModal(columnId, task)}
                className="text-blue-500 hover:text-blue-700"
              >
                <Edit size={16} />
              </button>
              {columnId === 'done' && (
                <button
                  onClick={() => archiveTask(columnId, task.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <Archive size={16} />
                </button>
              )}
            </div>
          </div>
        </li>
      )}
    </Draggable>
  );
};

export default Task;