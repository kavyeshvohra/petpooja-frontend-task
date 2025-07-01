import React from "react";
import { Badge } from "../ui/badge";
import { MoreHorizontal, Clock, MessageCircle } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { FilterTabs } from "./FilterTabs";
import { Avatar, AvatarFallback } from "../ui/avatar";
import ChevronUp from '../../assets/icons/chevron-up.svg'
import { ScrollArea } from "../ui/scroll-area";
import CalendarIcon from '../../assets/icons/calendar-dotted.svg';
import LayoutIcon from '../../assets/icons/layout.svg';
type TaskItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  status: string;
  type: string;
  comments: number;
};

const tasks: TaskItem[] = [
  {
    id: "#3789",
    title: "How to Manage Stock",
    date: "22 June, 2024",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 14,
  },
  {
    id: "#7182",
    title: "How to Manage Stock",
    date: "12 October, 2024",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 18,
  },
  {
    id: "#6047",
    title: "Tracking Daily Earnings",
    date: "3 April, 2025",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 17,
  },
  {
    id: "#6047",
    title: "Tools for Managing Reservations",
    date: "22 June, 2024",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 17,
  },
  {
    id: "#6047",
    title: "Tools for Managing Reservations",
    date: "12 October, 2024",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 17,
  },
  {
    id: "#4820",
    title: "Coordinating Employee Shifts",
    date: "3 April, 2025",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 15,
  },
  {
    id: "#6047",
    title: "Reviewing Client Happiness",
    date: "12 October, 2024",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 17,
  },
  {
    id: "#4820",
    title: "Ways to Prepare Meals",
    date: "3 April, 2025",
    time: "11:00 am",
    status: "Ongoing",
    type: "Inventory",
    comments: 15,
  },
];

export const WorkAllocatedCard: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm w-full">
      {/* Header */}
      <div className="flex sm:flex-row lg:flex-row lg:items-start px-4 pt-4 pb-0 justify-between gap-0 sm:gap-4 ">
        <div>
          <h2 className="text-lg font-semibold text-neutral-900 mb-2">Work Allocated</h2>
          <FilterTabs
            filters={[
              { name: "tasks", count: 10 },
              { name: "issues", count: 10 },
              { name: "forms", count: 10 },
            ]}
          onFilterChange={(filter) => console.log(`Filter changed to: ${filter}`)}
          />
        </div>

        <div className="flex gap-2 items-start sm:self-start sm:w-auto md:self-start">
          <Select>
            <SelectTrigger className="w-[150px] bg-gray-100 h-9 rounded-lg">
              <SelectValue placeholder="Select Employee" />
            </SelectTrigger>
            <SelectContent className="cursor-pointer">
              <SelectItem className="cursor-pointer" value="all">All Employees</SelectItem>
              <SelectItem className="cursor-pointer" value="ajay">Ajay</SelectItem>
              <SelectItem className="cursor-pointer" value="anita">Anita</SelectItem>
            </SelectContent>
          </Select>
          <button className="p-2 rounded hover:bg-gray-100">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </button>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 mb-4"></div>

      {/* Task Cards Grid */}
      <ScrollArea className="overflow-x-auto">
      <div className="flex flex-wrap gap-4 px-3 pb-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="flex-1 min-w-[300px] max-w-full sm:basis-[calc(33.333%-1rem)] border border-gray-200 rounded-lg p-4 hover:shadow transition-shadow"
          >
            <div className="flex mb-2">
              <div className="flex flex-col flex-grow gap-1">
                <div className="flex items-center justify-between gap-2 text-xs text-gray-500">
                  <span className="flex items-center text-normal"><ChevronUp className="text-errorcontent w-5 h-5"/>ID {task.id}</span>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    <span>{task.comments}</span>
                  </div>
                </div>
                <h3 className="font-semibold text-base text-neutral-900">{task.title}</h3>
              </div>
            </div>

            <div className="flex flex-row justify-between gap-2 text-xs text-gray-600 mb-3">
              <div className="flex gap-2">
                <div className="flex items-center text-sm text-neutralsubcontent gap-1">
                  <CalendarIcon className="w-4 h-4" />
                  <span className="text-neutralsubcontent">{task.date}</span>
                </div>
                <div className="flex items-center text-sm gap-1">
                  <img
                    src="./clock.svg"
                    alt="Calendar Icon"
                    className="w-4 h-4" 
                  />
                  <span className="text-neutralsubcontent">{task.time}</span>
                </div>
              </div>
              <Avatar className="w-6 h-6 bg-brandprimary flex-shrink-0">
                <AvatarFallback className="text-white bg-successcontent font-text-base-medium text-sm">
                  A
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="bg-gray-100 p-1 rounded-md">
                  <LayoutIcon className="w-5 h-5"/>
                </div>
                <Badge variant="outline" className=" rounded-lg text-base px-2 py-.75 border border-orange-200 bg-warningbg text-warningcontent">{task.status}</Badge>
              </div>
              <Badge variant="outline" className="bg-gray-100 border-none text-gray-800 px-2"><img src='./briefcase-01.svg' alt='Briefcase Icon' className='w-5 h-5 mr-1' />{task.type}</Badge>
            </div>
          </div>
        ))}
      </div>
      </ScrollArea>
    </div>
  );
};
