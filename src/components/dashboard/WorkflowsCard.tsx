import React from "react";
import { Eye, MoreHorizontal, ExternalLink } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback } from "../ui/avatar";

interface WorkflowItem {
  title: string;
  responses: number;
  tasks: number;
}

const workflows: WorkflowItem[] = [
  { title: "Stock Control Strategies", responses: 47, tasks: 22 },
  { title: "How to Handle Inventory", responses: 23, tasks: 15 },
  { title: "Inventory Management Tips", responses: 56, tasks: 30 },
  { title: "Managing Your Stock Effectively", responses: 89, tasks: 5 },
  { title: "Optimizing Your Inventory", responses: 34, tasks: 18 },
  { title: "Stock Management Techniques", responses: 61, tasks: 12 },
];

export const WorkflowsCard: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col px-3 pt-4 pb-3 lg:flex-row lg:items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Workflows
            </h2>
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

        {/* Divider */}
        <div className="border-t border-gray-200" />

      {/* Grid of Workflow Items */}
        <ScrollArea className="xs:!overflow-x-auto">
        <div className="grid grid-cols-2 p-6 sm:grid-cols-2 gap-4 overflow-y-auto">
        {workflows.map((workflow, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-lg p-3 flex justify-between items-start hover:shadow transition-shadow"
          >
            <div className="flex flex-col gap-2">
              <h3 className="font-medium text-neutral-900 text-sm mb-2">{workflow.title}</h3>
              <div className="flex gap-1 text-xs text-gray-500">
                  <span className="border-r border-gray-200 pr-3">
                    <span className="text-neutral-500 font-normal text-base">Responses</span><span className="text-sm text-black"> {workflow.responses}</span>
                  </span>
                  <span className="pl-1">
                    <span className="text-neutral-500 font-normal text-base">Tasks</span> <span className="text-sm text-black">{workflow.tasks}</span>
                  </span>
                </div>
            </div>
            <div className="flex flex-col items-center gap-2">
            <button className="p-1 rounded hover:bg-gray-100 flex-shrink-0">
              <Eye className="w-5 h-5 text-gray-500" />
            </button>
            <Avatar className="w-6 h-6 bg-brandprimary flex-shrink-0">
              <AvatarFallback className="text-white bg-successcontent font-text-base-medium text-sm">
                A
              </AvatarFallback>
            </Avatar>
            </div>
          </div>
        ))}
      </div>
        </ScrollArea>
    </div>
  );
};
