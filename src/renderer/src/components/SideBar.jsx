import { Home, Layout } from 'lucide-react';

const Sidebar = ({ setCurrentView }) => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6">
      <nav>
        <ul className="space-y-2">
          <li>
            <button
              onClick={() => setCurrentView('home')}
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full transition-colors duration-200"
            >
              <Home size={20} />
              <span>Home</span>
            </button>
          </li>
          <li>
            <button
              onClick={() => setCurrentView('kanban')}
              className="flex items-center space-x-2 hover:bg-gray-700 p-2 rounded-md w-full transition-colors duration-200"
            >
              <Layout size={20} />
              <span>Kanban Board</span>
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;