  import React, { useState } from "react";
  import { Badge } from "../ui/badge";
  import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
  } from "../ui/select";
import MoreHorizontal from "../../assets/icons/dots-horizontal.svg";
import ExternalLink from "../../assets/icons/link-external.svg";
  import { FilterTabs } from "./FilterTabs";
import { ScrollArea } from "../ui/scroll-area";

  interface Employee {
    name: string;
    department: string;
    assigned: number;
    ongoing: number;
    overdue: number;
    completed: number | string;
  }

  const employees: Employee[] = [
    { name: "Anita", department: "IT Services", assigned: 90, ongoing: 90, overdue: 90, completed: "90%" },
    { name: "Rahul", department: "Human Resources", assigned: 31, ongoing: 31, overdue: 31, completed: "31%" },
    { name: "Priya", department: "Sales Division", assigned: 45, ongoing: 45, overdue: 45, completed: "45%" },
    { name: "Vikram", department: "Research and Development", assigned: 79, ongoing: 79, overdue: 79, completed: "79%" },
    { name: "Sita", department: "Marketing Team", assigned: 52, ongoing: 52, overdue: 52, completed: "52%" },
    { name: "Ravi", department: "Finance Department", assigned: 64, ongoing: 64, overdue: 64, completed: "64%" },
    { name: "Kiran", department: "Customer Support", assigned: 87, ongoing: 87, overdue: 87, completed: "87%" },
  ];

  export const EmployeeProgressCard: React.FC = () => {
    const [filter, setFilter] = useState<"tasks" | "issues" | "workflows">("tasks");

    return (
      <div className="bg-white mt-8 border border-gray-200 rounded-2xl shadow-sm w-full flex flex-col">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start px-4 pt-4 justify-between gap-4">
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
            <Select>
              <SelectTrigger className="w-[150px] bg-gray-100 h-9 rounded-lg">
                  <SelectValue placeholder="Select Employee" />
              </SelectTrigger>
              <SelectContent className="cursor-pointer">
                  <SelectItem className="cursor-pointer" value="all">All Employees</SelectItem>
                  <SelectItem className="cursor-pointer" value="ajay">Ajay</SelectItem>
                  <SelectItem className="cursor-pointer" value="anita">Anita</SelectItem>
                  <SelectItem className="cursor-pointer" value="rahul">Rahul</SelectItem>
                  <SelectItem className="cursor-pointer" value="vikram">Vikram</SelectItem>
              </SelectContent>
            </Select>
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
        
        {
        filter === "tasks" && (
        <>
        {/* Table with sticky header */}
        <ScrollArea className="xs:!overflow-x-auto">
          <table className="w-full table-fixed border-collapse">
            <colgroup>
              <col className="w-[150px]" />
              <col className="w-[250px]" />
              <col className="w-[100px]" />
              <col className="w-[100px]" />
              <col className="w-[100px]" />
              <col className="w-[120px]" />
            </colgroup>

            <thead className="bg-gray-50">
              <tr>
                <th className="sticky top-0 bg-gray-50 font-medium px-6 py-4 text-left z-10">Name</th>
                <th className="sticky top-0 bg-gray-50 px-6 py-4 font-medium text-left z-10">Department</th>
                <th className="sticky top-0 bg-gray-50 px-6 py-4 font-medium text-center z-10">Assigned</th>
                <th className="sticky top-0 bg-gray-50 px-6 py-4 font-medium text-center z-10">Ongoing</th>
                <th className="sticky top-0 bg-gray-50 px-6 py-4 font-medium text-center z-10">Overdue</th>
                <th className="sticky top-0 bg-gray-50 px-6 py-4 font-medium text-center z-10">Completed</th>
              </tr>
            </thead>

            <tbody>
              {employees.map((e, i) => (
                <tr key={i} className="border-b hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">{e.name}</td>
                  <td className="px-6 py-4">{e.department}</td>
                  <td className="px-6 py-4 text-center">{e.assigned}</td>
                  <td className="px-6 py-4 text-center">{e.ongoing}</td>
                  <td className="px-6 py-4 text-center">{e.overdue}</td>
                  <td className="px-6 py-4 text-center">{e.completed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </ScrollArea>
        </>
      )}
      </div>
    );
  };