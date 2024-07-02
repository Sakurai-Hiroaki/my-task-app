import { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';
import TaskModal from './TaskModal';
import ArchivedTasks from './ArchivedTasks';

const defaultColumns = [
  { id: 'todo', title: 'To Do', tasks: [] },
  { id: 'inProgress', title: 'In Progress', tasks: [] },
  { id: 'done', title: 'Done', tasks: [] },
];

const KanbanBoard = () => {
  const [columns, setColumns] = useState(defaultColumns);
  const [archivedTasks, setArchivedTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');
  const [currentColumn, setCurrentColumn] = useState(null);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    saveData();
  }, [columns, archivedTasks]);

  const loadData = async () => {
    try {
      const data = await window.api.getData();
      if (data) {
        setColumns(data.columns || defaultColumns);
        setArchivedTasks(data.archivedTasks || []);
      }
    } catch (error) {
      console.error('Failed to load data:', error);
    }
  };

  const saveData = async () => {
    try {
      await window.api.setData({ columns, archivedTasks });
    } catch (error) {
      console.error('Failed to save data:', error);
    }
  };
  
  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceColIndex = columns.findIndex(
      (col) => col.id === source.droppableId
    );
    const destColIndex = columns.findIndex(
      (col) => col.id === destination.droppableId
    );
    const sourceCol = columns[sourceColIndex];
    const destCol = columns[destColIndex];

    const sourceTasks = [...sourceCol.tasks];
    const destTasks =
      sourceColIndex === destColIndex ? sourceTasks : [...destCol.tasks];

    const [removed] = sourceTasks.splice(source.index, 1);
    destTasks.splice(destination.index, 0, removed);

    const newColumns = [...columns];
    newColumns[sourceColIndex] = { ...sourceCol, tasks: sourceTasks };
    if (sourceColIndex !== destColIndex) {
      newColumns[destColIndex] = { ...destCol, tasks: destTasks };
    }

    setColumns(newColumns);
  };

  const openAddModal = (columnId) => {
    setModalMode('add');
    setCurrentColumn(columnId);
    setCurrentTask(null);
    setIsModalOpen(true);
  };

  const openEditModal = (columnId, task) => {
    setModalMode('edit');
    setCurrentColumn(columnId);
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentColumn(null);
    setCurrentTask(null);
  };

  const addOrUpdateTask = (task) => {
    const columnIndex = columns.findIndex((col) => col.id === currentColumn);
    if (columnIndex === -1) return;

    const newColumns = [...columns];
    const column = newColumns[columnIndex];

    if (modalMode === 'add') {
      column.tasks.push(task);
    } else {
      const taskIndex = column.tasks.findIndex((t) => t.id === task.id);
      if (taskIndex !== -1) {
        column.tasks[taskIndex] = task;
      }
    }

    setColumns(newColumns);
    closeModal();
  };

  const archiveTask = (columnId, taskId) => {
    const columnIndex = columns.findIndex((col) => col.id === columnId);
    if (columnIndex === -1) return;

    const newColumns = [...columns];
    const column = newColumns[columnIndex];
    const taskIndex = column.tasks.findIndex((t) => t.id === taskId);

    if (taskIndex !== -1) {
      const [task] = column.tasks.splice(taskIndex, 1);
      setColumns(newColumns);
      setArchivedTasks([...archivedTasks, task]);
    }
  };

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold mb-4">タスク管理</h1>
      <div className="flex space-x-4 overflow-x-auto pb-4">
        <DragDropContext onDragEnd={onDragEnd}>
          {columns.map((column) => (
            <Column
              key={column.id}
              column={column}
              openAddModal={openAddModal}
              openEditModal={openEditModal}
              archiveTask={archiveTask}
            />
          ))}
        </DragDropContext>
      </div>
      <ArchivedTasks tasks={archivedTasks} />
      {isModalOpen && (
        <TaskModal
          mode={modalMode}
          initialTask={currentTask}
          onClose={closeModal}
          onSubmit={addOrUpdateTask}
        />
      )}
    </div>
  );
};

export default KanbanBoard;
