import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { Card } from "../ui/card";
import { FilterTabs } from "./FilterTabs";
import MoreHorizontal from "../../assets/icons/dots-horizontal.svg";
interface DepartmentData {
  name: string;
  tasksPercent: number;
  overduePercent: number;
  tasksCount: number;
  overdueCount: number;
}

const sampleData: DepartmentData[] = [
  { name: "IT", tasksPercent: 15, overduePercent: 5, tasksCount: 30, overdueCount: 10 },
  { name: "HR", tasksPercent: 35, overduePercent: 10, tasksCount: 70, overdueCount: 20 },
  { name: "Management", tasksPercent: 62, overduePercent: 10, tasksCount: 120, overdueCount: 12 },
  { name: "Sales", tasksPercent: 75, overduePercent: 15, tasksCount: 150, overdueCount: 30 },
  { name: "Marketing", tasksPercent: 70, overduePercent: 20, tasksCount: 140, overdueCount: 40 },
  { name: "Finance", tasksPercent: 70, overduePercent: 20, tasksCount: 140, overdueCount: 40 },
  { name: "Support", tasksPercent: 70, overduePercent: 20, tasksCount: 140, overdueCount: 40 },
  { name: "Admin", tasksPercent: 60, overduePercent: 15, tasksCount: 120, overdueCount: 30 },
];

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    const taskData = payload.find((p: any) => p.dataKey === "tasksPercent");
    const overdueData = payload.find((p: any) => p.dataKey === "overduePercent");
    return (
      <div className="bg-gray-800 text-white p-3 rounded-md shadow-md text-sm space-y-1">
        <p className="font-medium">{label}</p>
        <p>• Assigned Tasks : {taskData?.value}% ({taskData?.payload.tasksCount})</p>
        <p>• Overdue Tasks : {overdueData?.value}% ({overdueData?.payload.overdueCount})</p>
      </div>
    );
  }
  return null;
};

export const DepartmentAllocationCard: React.FC = () => {
  const [filter, setFilter] = useState<"tasks" | "issues" | "workflows">("tasks");
  // Calculate minimum width based on number of bars
  const minWidth = sampleData.length * 80

  return (
    <Card className="p-4 rounded-2xl border border-gray-200 shadow-sm w-full">
      {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900 mb-2">
              Employee wise progress
            </h2>
            <FilterTabs
              filters={[
                { name: "tasks", count: 10 },
                { name: "issues", count: 10 },
                { name: "workflows", count: 10 },
              ]}
              onFilterChange={(f) => setFilter(f as any)}
            />
          </div>

          <div className="flex items-center gap-2">
            <button className="p-2 rounded hover:bg-gray-100">
              <MoreHorizontal className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </div>
      { /* Divider */}
      <div className="border-t border-gray-200" />

        <div className="flex flex-col mt-2 flex-1">
          <div className="flex flex-row flex-1">
          {/* Fixed Y-axis */}
          <div className="flex-shrink-0 w-12 h-auto relative">
            <div className="absolute inset-0 flex flex-col border-r border-black justify-between text-sm text-gray-500 text-right pr-2">
              <span>100%</span>
              <span>80%</span>
              <span>60%</span>
              <span>40%</span>
              <span>20%</span>
            </div>
          </div>

          {/* Scrollable chart area with grid lines */}
          <div className="flex-1 overflow-x-auto relative hide-scrollbar">
            <div style={{ minWidth: `${minWidth}px`, height: "296px" }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={sampleData}
                  margin={{
                    top: 20,
                    right: 30,
                    left: 0,
                    bottom:0,
                  }}
                  barCategoryGap="20%"
                >
                  {/* Grid lines */}
                  <CartesianGrid stroke="#E5E7EB" strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={false} interval={0} />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip content={<CustomTooltip />} cursor={false} />
                  <Bar dataKey="tasksPercent" stackId="a" fill="#99CFB5" radius={[0, 0, 4, 4]} />
                  <Bar dataKey="overduePercent" stackId="a" fill="#FFDD9D" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          </div>
          {/* X-axis label */}
          <div className="text-center">
            <span className="text-sm text-gray-500">Departments</span>
          </div>
        </div>
    </Card>
  );
};
