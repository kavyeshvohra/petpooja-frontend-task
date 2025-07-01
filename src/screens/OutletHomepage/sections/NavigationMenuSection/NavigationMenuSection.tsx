import React from "react";
import { Avatar, AvatarFallback } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import HomeIcon from "../../../../assets/icons/home-03.svg";
import AlertCircleIcon from '../../../../assets/icons/alert-circle-1.svg';
import TaskIcon from '../../../../assets/icons/task.svg';
import FormIcon from '../../../../assets/icons/forms.svg';
import CalendarIcon from '../../../../assets/icons/calendar-dotted.svg';
import TemplateIcon from '../../../../assets/icons/template.svg';
import TemplateLibraryIcon from '../../../../assets/icons/template-library.svg';
import UsersIcon from '../../../../assets/icons/users.svg'
import LineChartIcon from '../../../../assets/icons/line-chart.svg';
import LogOutIcon from '../../../../assets/icons/log-out.svg';
import { XIcon } from "lucide-react";
interface NavigationMenuSectionProps {
  onClose?: () => void;
}

export const NavigationMenuSection = ({ onClose }: NavigationMenuSectionProps): JSX.Element => {
  // Navigation menu items data
  const menuItems = [
    { icon: <HomeIcon className="!w-5 !h-5" />, 
      label: "Home", 
      active: true 
    },
    {
      icon: <TaskIcon className="!w-5 !h-5 text-[#979797]"/>,
      label: "Tasks",
      active: false,
    },
    {
      icon: <AlertCircleIcon className="!w-5 !h-5 text-[#979797]" />,
      label: "Issues",
      active: false,
    },
    {
      icon: (
        <FormIcon className="!w-5 !h-5 text-[#979797]" />
      ),
      label: "Forms",
      active: false,
    },
    {
      icon: <CalendarIcon className="!w-5 !h-5" />,
      label: "Calendar",
      active: false,
    },
    {
      icon: (
        <TemplateIcon className="!w-5 !h-5" />
      ),
      label: "Browse Templates",
      active: false,
    },
    {
      icon: (
        <TemplateLibraryIcon className="!w-5 !h-5" />
      ),
      label: "Temlate Library",
      active: false,
    },
    {
      icon: <UsersIcon className="!w-5 !h-5" />,
      label: "User Management",
      active: false,
    },
    {
      icon: <LineChartIcon className="!w-5 !h-5" />,
      label: "Reports",
      active: false,
    },
    {
      icon: <LogOutIcon className="!w-5 !h-5" />,
      label: "Log Out",
      active: false,
    },
  ];

  // Mobile layout with scrolling
  if (onClose) {
    return (
      <div className="flex flex-col h-full w-full bg-white">
        {/* Fixed Header */}
        <div className="flex justify-between items-center p-4 border-b border-[#ebebeb] flex-shrink-0">
          <h2 className="text-lg font-semibold text-[#212121]">Menu</h2>
          <Button
            variant="ghost"
            size="sm"
            className="p-2 h-8 w-8"
            onClick={onClose}
          >
            <XIcon className="w-5 h-5 text-[#212121]" />
          </Button>
        </div>

        {/* Scrollable Content */}
        <ScrollArea className="flex-1">
          <div className="p-4 space-y-1">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-full h-12 justify-start gap-3 p-3 rounded-lg text-base ${
                  item.active ? "bg-brandlight text-brandprimary" : "text-[#212121]"
                }`}
                onClick={() => {
                  // Handle navigation here
                  // No onClose in desktop layout
                }}
              >
                {item.icon}
                <span className="font-text-small-regular text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] truncate">
                  {item.label}
                </span>
              </Button>
            ))}
          </div>
        </ScrollArea>

        {/* Fixed Footer */}
        <div className="p-4 border-t border-[#ebebeb] flex-shrink-0">
          <Card className="p-0 border-0 w-full bg-neutrallight-bg rounded-lg">
            <CardContent className="p-3">
              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10 bg-brandprimary flex-shrink-0">
                  <AvatarFallback className="text-white bg-successcontent font-text-base-medium text-base">
                    A
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start min-w-0 flex-1">
                  <p className="font-text-base-regular text-[#212121] text-base tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] truncate w-full">
                    Ajay
                  </p>
                  <p className="font-text-small-regular text-neutralsub-content text-sm tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] truncate w-full">
                    Manager
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Desktop layout (unchanged)
  return (
    <nav className="flex flex-col h-full w-[200px] lg:w-[200px] items-center justify-between p-3 relative bg-white border-r border-[#ebebeb] lg:border-r-[#ebebeb]">
      <div className="flex flex-col items-start gap-1 self-stretch w-full bg-white">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full h-9 justify-start gap-2 p-2 rounded-lg text-sm ${
              item.active ? "bg-brandlight text-brandprimary" : "text-[#212121]"
            }`}
            onClick={() => {
              // Handle navigation here
              if (onClose) onClose();
            }}
          >
            {item.icon}
            <span className="font-text-small-regular text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] truncate">
              {item.label}
            </span>
          </Button>
        ))}
      </div>

      <Card className="p-0 border-0 self-stretch w-full bg-neutrallight-bg rounded-lg mt-4">
        <CardContent className="p-2">
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8 bg-brandprimary flex-shrink-0">
              <AvatarFallback className="text-white bg-successcontent font-text-base-medium">
                A
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start min-w-0 flex-1">
              <p className="font-text-base-regular text-[#212121] text-[length:var(--text-base-regular-font-size)] tracking-[var(--text-base-regular-letter-spacing)] leading-[var(--text-base-regular-line-height)] truncate w-full">
                Ajay
              </p>
              <p className="font-text-small-regular text-neutralsub-content text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] truncate w-full">
                Manager
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </nav>
  );
};