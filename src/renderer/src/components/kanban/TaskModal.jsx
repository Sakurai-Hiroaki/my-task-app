import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const TaskModal = ({ mode, initialTask, onClose, onSubmit }) => {
  const [taskContent, setTaskContent] = useState('');
  const [taskDueDate, setTaskDueDate] = useState('');
  const [taskNote, setTaskNote] = useState('');

  useEffect(() => {
    if (initialTask) {
      setTaskContent(initialTask.content);
      setTaskDueDate(initialTask.dueDate);
      setTaskNote(initialTask.note || '');
    }
  }, [initialTask]);

  const handleSubmit = () => {
    if (taskContent && taskDueDate) {
      const task = {
        id: initialTask ? initialTask.id : `task-${Date.now()}`,
        content: taskContent,
        dueDate: taskDueDate,
        note: taskNote
      };
      onSubmit(task);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">
            {mode === 'add' ? 'Add New Task' : 'Edit Task'}
          </h3>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>
        <input
          type="text"
          value={taskContent}
          onChange={(e) => setTaskContent(e.target.value)}
          placeholder="タスク名"
          className="w-full p-2 border rounded mb-4"
        />
        <input
          type="date"
          value={taskDueDate}
          onChange={(e) => setTaskDueDate(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <textarea
          value={taskNote}
          onChange={(e) => setTaskNote(e.target.value)}
          placeholder="メモを追加(任意)"
          className="w-full p-2 border rounded mb-4 h-24 resize-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {mode === 'add' ? 'Add Task' : 'Update Task'}
        </button>
      </div>
    </div>
  );
};

export default TaskModal;