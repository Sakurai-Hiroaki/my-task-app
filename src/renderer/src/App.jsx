import  { useState } from 'react';
import Sidebar from "./components/SideBar";
import KanbanBoard from "./components/kanban/KanbanBoard";
import Home from "./components/Home";

const App = () => {
  const [currentView, setCurrentView] = useState('home');

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return <Home />;
      case 'kanban':
        return <KanbanBoard />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar setCurrentView={setCurrentView} />
      <main className="flex-1 p-6 overflow-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;