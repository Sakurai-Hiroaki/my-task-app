const ArchivedTasks = ({ tasks }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-lg">
      <h2 className="font-bold mb-4 text-lg">Archived Tasks</h2>
      <ul className="space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="bg-white p-2 rounded shadow">
            <p>{task.content}</p>
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
            {task.note && (
              <div className="mt-2 p-2 bg-gray-100 rounded text-sm text-gray-700 border border-gray-200">
                {task.note}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArchivedTasks;