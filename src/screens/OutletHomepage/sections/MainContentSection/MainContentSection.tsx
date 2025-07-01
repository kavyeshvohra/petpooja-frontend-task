import React from 'react';
import { Badge } from '../../../../components/ui/badge';
import { Button } from '../../../../components/ui/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../../../components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../../../../components/ui/select';
import { Separator } from '../../../../components/ui/separator';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../../../../components/ui/table';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '../../../../components/ui/tabs';
import { Avatar, AvatarFallback } from '../../../../components/ui/avatar';
import { ScrollArea, ScrollBar } from '../../../../components/ui/scroll-area';
import {
  CalendarDaysIcon,
  ChevronDownIcon,
  ClockIcon,
  EyeIcon,
  MessageCircleIcon,
  MoreHorizontalIcon,
  PlusIcon,
  UserPlusIcon,
} from 'lucide-react';
import AutoReviewIcon from '../../../../assets/icons/auto-review.svg';
import TaskIcon from '../../../../assets/icons/task.svg';
import AlertCircleIcon from '../../../../assets/icons/alert-circle-1.svg';
import LayoutAltIcon from '../../../../assets/icons/layout.svg';
import { WorkAllocatedCard } from '../../../../components/dashboard/WorkAllocated';
import { EmployeeProgressCard } from '../../../../components/dashboard/EmployeeProgressRecord';
import { PersonalNotepadCard } from '../../../../components/dashboard/PersonalNotepad';
import { DepartmentAllocationCard } from '../../../../components/dashboard/DepartmentAllocation';
import { OverdueTasksCard } from '../../../../components/dashboard/OverdueTasks';
import { WorkflowsCard } from '../../../../components/dashboard/WorkflowsCard';

export const MainContentSection = (): JSX.Element => {
  // Function to get greeting based on current time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      return 'Good Morning';
    } else if (hour >= 12 && hour < 17) {
      return 'Good Afternoon';
    } else {
      return 'Good Evening';
    }
  };

  const workItems = [
    {
      id: '#3789',
      title: 'How to Manage Stock',
      date: '22 June, 2024',
      time: '11:00 am',
      status: 'Ongoing',
      type: 'Inventory',
      comments: 14,
    },
    {
      id: '#3789',
      title: 'How to Manage Stock',
      date: '3 April, 2024',
      time: '11:00 am',
      status: 'Ongoing',
      type: 'Inventory',
      comments: 14,
    },
    {
      id: '#7162',
      title: 'Tracking Daily Earnings',
      date: '12 October, 2024',
      time: '11:00 am',
      status: 'Ongoing',
      type: 'Inventory',
      comments: 18,
    },
  ];

  // Dynamic data for main stats cards
  const mainStatsCards = [
    {
      icon: AutoReviewIcon,
      iconProps: { className: 'text-white w-6 h-6' },
      bgColor: 'bg-brandprimary',
      value: 22,
      title: 'Ai Review',
      stats: [
        {
          label: 'Manually Approve',
          value: 2,
          valueClass: 'text-errorcontent text-base bg-issuebg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Completed',
          value: 10,
          valueClass: 'text-successcontent text-base bg-successbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Rejected by AI',
          value: 10,
          valueClass: 'text-warningcontent text-base bg-warningbg py-1 px-2 rounded-full font-normal',
        },
      ],
    },
    {
      icon: TaskIcon,
      iconProps: { className: 'w-6 h-6 text-predictioncontent'},
      bgColor: 'bg-predictionbg',
      value: 22,
      title: 'Tasks',
      stats: [
        {
          label: 'Ongoing',
          value: 10,
          valueClass: 'text-warningcontent text-base bg-warningbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Overdue',
          value: 2,
          valueClass: 'text-errorcontent text-base bg-issuebg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Completed',
          value: 10,
          valueClass: 'text-successcontent text-base bg-successbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Scheduled',
          value: 0,
          valueClass: 'text-scheduledcontent text-base bg-scheduledbg py-1 px-2 rounded-full font-normal',
        },
      ],
    },
    {
      icon: AlertCircleIcon,
      iconProps: { className: 'w-6 h-6 text-issuecontent' },
      bgColor: 'bg-issuebg',
      value: 22,
      title: 'Issues',
      stats: [
        {
          label: 'Ignored',
          value: 2,
          valueClass: 'text-errorcontent text-base bg-issuebg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Resolved',
          value: 10,
          valueClass: 'text-successcontent text-base bg-successbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Open',
          value: 10,
          valueClass: 'text-warningcontent text-base bg-warningbg py-1 px-2 rounded-full font-normal',
        },
      ],
    },
    {
      icon: LayoutAltIcon,
      iconProps: { className: 'w-6 h-6 text-scheduledcontent' },
      bgColor: 'bg-scheduledbg',
      value: 20,
      title: 'Forms',
      stats: [
        {
          label: 'Open Responses',
          value: 0,
          valueClass: 'text-scheduledcontent text-base bg-scheduledbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Submitted Responses',
          value: 10,
          valueClass: 'text-successcontent text-base bg-successbg py-1 px-2 rounded-full font-normal',
        },
        {
          label: 'Ongoing Tasks',
          value: 10,
          valueClass: 'text-warningcontent text-base bg-warningbg py-1 px-2 rounded-full font-normal',
        },
      ],
    },
  ];

  return (
    <div>
      <div className="flex-1 p-3 lg:p-6 bg-white">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <h1 className="text-xl lg:text-2xl font-heading-h4 font-[number:var(--heading-h4-font-weight)] text-neutraltext">
              {getGreeting()} ! Ajay
            </h1>
          </div>

          <Button className="h-9 bg-white border shadow-none hover:bg-gray-50 text-buttonColor rounded-lg px-4">
            <img src="./dashboard.svg" />
            Add Widget
          </Button>
        </div>

        {/* Main Stats Cards - Horizontal Scroll */}
        <div className="mb-8">
          <ScrollArea className="w-full whitespace-nowrap">
            <div className="inline-flex min-w-max gap-4 lg:gap-6 pb-4">
              {mainStatsCards.map((card, idx) => {
                const Icon = card.icon;
                return (
                  <Card
                    key={idx}
                    className="bg-white border border-gray-200 rounded-2xl shadow-sm flex-shrink-0 "
                  >
                    <CardContent className="p-4">
                      <div className="flex items-center gap-3 mb-4">
                        <div
                          className={`w-10 h-10 ${card.bgColor} rounded-xl flex items-center justify-center`}
                        >
                          <Icon {...card.iconProps} />
                        </div>
                        <div>
                          <h3 className="font-semibold text-xl text-neutraltext">
                            {card.value} {card.title}
                          </h3>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 justify-between text-sm text-neutralsub-content">
                        {card.stats.map((stat, sidx) => (
                          <span key={sidx}>
                            {stat.label}{' '}
                            <span className={stat.valueClass}>{stat.value}</span>
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
            <ScrollBar
              orientation="horizontal"
              className="h-2 bg-neutralstroke rounded-full"
            />
          </ScrollArea>
        </div>

        {/* Work Allocated Section */}
        <WorkAllocatedCard/>

        {/*Employee Progress Record Section */}
        <EmployeeProgressCard/>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Personal Notepad Section */}
          <PersonalNotepadCard/>

          {/*Department Allocation Section */}
          <DepartmentAllocationCard/>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          <OverdueTasksCard/>

          <WorkflowsCard/>
        </div>
      </div>
    </div>
  );
};
