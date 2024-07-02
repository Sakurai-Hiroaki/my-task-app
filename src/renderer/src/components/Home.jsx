import React from 'react';
import { BarChart, Calendar, CheckSquare, Clock } from 'lucide-react';

const Home = () => {
  return (
    <h1 className="text-3xl font-bold underline">Hello world!</h1>
    // <div className="space-y-6">
    //   <h1 className="text-3xl font-bold">Welcome to Your Task Manager</h1>

    //   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
    //     <div className="bg-white rounded-lg shadow p-4">
    //       <div className="flex items-center justify-between pb-2">
    //         <h3 className="text-sm font-medium text-gray-500">Total Tasks</h3>
    //         <CheckSquare className="h-4 w-4 text-gray-400" />
    //       </div>
    //       <div className="text-2xl font-bold">24</div>
    //       <p className="text-xs text-gray-500">+2 from yesterday</p>
    //     </div>

    //     <div className="bg-white rounded-lg shadow p-4">
    //       <div className="flex items-center justify-between pb-2">
    //         <h3 className="text-sm font-medium text-gray-500">Tasks Due Today</h3>
    //         <Calendar className="h-4 w-4 text-gray-400" />
    //       </div>
    //       <div className="text-2xl font-bold">5</div>
    //       <p className="text-xs text-gray-500">3 completed</p>
    //     </div>

    //     <div className="bg-white rounded-lg shadow p-4">
    //       <div className="flex items-center justify-between pb-2">
    //         <h3 className="text-sm font-medium text-gray-500">Productivity</h3>
    //         <BarChart className="h-4 w-4 text-gray-400" />
    //       </div>
    //       <div className="text-2xl font-bold">78%</div>
    //       <p className="text-xs text-gray-500">+5% from last week</p>
    //     </div>

    //     <div className="bg-white rounded-lg shadow p-4">
    //       <div className="flex items-center justify-between pb-2">
    //         <h3 className="text-sm font-medium text-gray-500">Time Spent</h3>
    //         <Clock className="h-4 w-4 text-gray-400" />
    //       </div>
    //       <div className="text-2xl font-bold">32h 40m</div>
    //       <p className="text-xs text-gray-500">This week</p>
    //     </div>
    //   </div>

    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    //     <div className="bg-white rounded-lg shadow p-4">
    //       <h3 className="text-lg font-semibold mb-4">Recent Activity</h3>
    //       <ul className="space-y-2">
    //         <li className="text-sm text-gray-600">Task "Implement login page" moved to Done</li>
    //         <li className="text-sm text-gray-600">New task "Design user dashboard" added to To Do</li>
    //         <li className="text-sm text-gray-600">Task "Fix navigation bug" started</li>
    //       </ul>
    //     </div>

    //     <div className="bg-white rounded-lg shadow p-4">
    //       <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
    //       <div className="flex flex-col space-y-2">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
    //           Add New Task
    //         </button>
    //         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors">
    //           View Kanban Board
    //         </button>
    //         <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors">
    //           Generate Report
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
