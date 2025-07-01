import React, { useState, useRef, useEffect } from "react";
import { Badge } from "../ui/badge";

interface FilterTabsProps {
  filters: { name: string; count: number }[];
  onFilterChange?: (filter: string) => void;
}

export const FilterTabs: React.FC<FilterTabsProps> = ({ filters, onFilterChange }) => {
  const [activeTab, setActiveTab] = useState(filters[0]?.name || "");
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const containerRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const handleTabClick = (tabName: string) => {
    setActiveTab(tabName);
    onFilterChange?.(tabName);
  };

  const getTabClasses = (tabName: string) =>
    `relative flex items-center gap-2 cursor-pointer pb-4 ${
      activeTab === tabName
        ? "text-green-700 font-semibold"
        : "text-neutral-500 hover:text-neutral-700"
    }`;

  useEffect(() => {
    const activeEl = tabRefs.current[activeTab];
    if (activeEl && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const activeRect = activeEl.getBoundingClientRect();
      setIndicatorStyle({
        left: activeRect.left - containerRect.left - 6,
        width: activeRect.width + 12,
      });
    }
  }, [activeTab]);

  return (
    <div className="relative flex gap-4 pl-3 text-sm" ref={containerRef}>
      {filters.map(({ name, count }) => (
        <div
          key={name}
          ref={(el) => (tabRefs.current[name] = el)}
          className={getTabClasses(name)}
          onClick={() => handleTabClick(name)}
        >
          <span>{name.charAt(0).toUpperCase() + name.slice(1)}</span>
          <Badge
            variant="secondary"
            className={
              activeTab === name
                ? "bg-green-100 text-green-800"
                : "bg-gray-100 text-gray-800"
            }
          >
            {count}
          </Badge>
        </div>
      ))}

      <div
        className="absolute bottom-0 h-1 bg-green-700 rounded-t-full transition-all duration-300"
        style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
      />
    </div>
  );
};
