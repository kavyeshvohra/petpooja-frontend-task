import React, { useState } from "react";
import { ScrollArea } from "../ui/scroll-area";
import { ExternalLink, MoreHorizontal, UserPlus2 } from "lucide-react";
import { Badge } from "../ui/badge";

interface OverdueTask {
  name: string;
  assignedTo: string;
  status: string;
  dueDate: string;
}

const overdueTasks: OverdueTask[] = [
  { name: "Menu Planning", assignedTo: "Ajay", status: "Overdue", dueDate: "12-07-2024" },
  { name: "Staff Scheduling", assignedTo: "Niraj", status: "Overdue", dueDate: "01-08-2023" },
  { name: "Inventory management", assignedTo: "Vijay", status: "Overdue", dueDate: "02-09-2022" },
  { name: "Customer Feedback Analysis", assignedTo: "Arvind", status: "Overdue", dueDate: "11-06-2025" },
  { name: "Budget Forecasting", assignedTo: "Priya", status: "Overdue", dueDate: "04-11-2020" },
  { name: "Marketing Strategy Development", assignedTo: "Suresh", status: "Overdue", dueDate: "10-05-2026" },
  { name: "Quality Assurance Testing", assignedTo: "Fatima", status: "Overdue", dueDate: "03-10-2021" },
];


export const OverdueTasksCard: React.FC = () => {
    const [hoveredTask, setHoveredTask] = useState<number | null>(null);

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-3 pt-4 pb-3">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-semibold text-neutral-900">Overdue tasks</h2>
          <span className="text-sm font-normal text-gray-500 bg-gray-100 rounded-full px-1 py-0.5">10</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded hover:bg-gray-100">
            <ExternalLink className="w-5 h-5 text-gray-500" />
          </button>
          <button className="p-2 rounded hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-200" />

      {/* Table with sticky header */}
      <ScrollArea className="xs:!overflow-x-auto">
        <table className="w-full table-fixed border-collapse">
          <colgroup>
            <col className="w-[180px]" />
            <col className="w-[120px]" />
            <col className="w-[100px]" />
            <col className="w-[100px]" />
            <col className="w-[80px]" />
          </colgroup>

          <thead className="bg-gray-50">
            <tr>
              <th className="sticky top-0 bg-gray-50 px-3 py-4 font-medium text-left z-10">Task Name</th>
              <th className="sticky top-0 bg-gray-50 px-3 py-4 font-medium text-left z-10">Assigned to</th>
              <th className="sticky top-0 bg-gray-50 px-3 py-4 font-medium text-left z-10">Status</th>
              <th className="sticky top-0 bg-gray-50 px-3 py-4 font-medium text-left z-10">Due date</th>
              <th className="sticky top-0 bg-gray-50 px-3 py-4 font-medium text-center z-10">Reassign</th>
            </tr>
          </thead>

          <tbody>
            {overdueTasks.map((task, index) => (
              <tr key={index} className="border-b hover:bg-gray-50 transition-colors">
                <td className="px-3 py-4">
                  <div 
                    className={`cursor-pointer transition-all duration-200 ${
                      hoveredTask === index ? 'whitespace-normal' : 'truncate'
                    }`}
                    onMouseEnter={() => setHoveredTask(index)}
                    onMouseLeave={() => setHoveredTask(null)}
                  >
                    {task.name}
                  </div>
                </td>
                <td className="px-3 py-4">{task.assignedTo}</td>
                <td className="px-3 py-4">
                  <Badge variant="outline" className="bg-orange-50 p-1 rounded-md text-orange-500 border border-orange-200 font-medium">
                    {task.status}
                  </Badge>
                </td>
                <td className="px-3 py-4">{task.dueDate}</td>
                <td className="px-3 py-4 text-center">
                  <button className="p-1 rounded hover:bg-gray-100">
                    <UserPlus2 className="w-4 h-4 text-gray-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollArea>
    </div>
  );
};
