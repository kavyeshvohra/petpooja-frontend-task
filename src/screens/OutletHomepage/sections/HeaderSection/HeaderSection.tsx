import {
  ChevronDownIcon,
  MenuIcon,
  PlusIcon,
  XIcon,
} from 'lucide-react';
// import React from "react";
import { Button } from '../../../../components/ui/button';
import { Separator } from '../../../../components/ui/separator';
import AutoReviewIcon from '../../../../assets/icons/auto-review.svg';
import HomeIcon from '../../../../assets/icons/home-03.svg';
import CalendarIcon from '../../../../assets/icons/calendar-dotted.svg';
import BuildingIcon from '../../../../assets/icons/building.svg';
import BellIcon from '../../../../assets/icons/bell-01.svg';
interface HeaderSectionProps {
  onMobileMenuToggle?: () => void;
  isMobileMenuOpen?: boolean;
}

export const HeaderSection = ({
  onMobileMenuToggle,
  isMobileMenuOpen,
}: HeaderSectionProps): JSX.Element => {
  return (
    <header className="sticky top-0 flex items-center z-50 gap-3 lg:gap-9 pl-3 pr-3 lg:pr-6 py-3 relative flex-[0_0_auto] bg-white border-b border-[#ebebeb]">
      {/* Mobile menu button */}
      <Button
        variant="ghost"
        size="sm"
        className="lg:hidden p-2 h-8 w-8"
        onClick={onMobileMenuToggle}
      >
        {isMobileMenuOpen ? (
          <XIcon className="w-5 h-5 text-[#212121]" />
        ) : (
          <MenuIcon className="w-5 h-5 text-[#212121]" />
        )}
      </Button>

      {/* Logo section */}
        <div className="flex h-8 items-center gap-2 relative">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <div className="relative w-[85.74px] h-8 hidden sm:block">
                <img
                  className="w-full h-full object-contain"
                  alt="Petpooja Logo"
                  src="/petpooja-logo.svg"
                />
              </div>
            </div>
          </div>

          {/* Mobile logo - just the icon */}
          <div className="sm:hidden w-8 h-8 bg-[url(/group-3.png)] bg-[100%_100%]">
            <img
              className=""
              alt="PetPooja Logo"
              src="/petpooja-mobile.svg"
            />
          </div>

      {/* Main content section */}
      <div className="flex items-center xs:justify-end lg:!justify-between relative flex-1 grow">
        {/* HomeIcon navigation - hidden on mobile */}
        <div className="hidden md:inline-flex items-center relative flex-[0_0_auto]">
          <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
            <HomeIcon className="w-5 h-5 text-[#212121]" />
            <div className="relative w-fit mt-[-1.00px] font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[#212121] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
              Home
            </div>
          </div>
        </div>

        {/* Right side elements */}
        <div className="inline-flex items-center gap-2 lg:gap-3 relative flex-[0_0_auto]">
          {/* Notification icon - hidden on small mobile */}
          <div className="hidden xs:flex w-8 h-8 items-center justify-center gap-4 p-[3.2px] relative rounded-[6.4px]">
            <div className="relative w-5 h-5">
              <div className="relative ">
                <AutoReviewIcon className="w-6 h-6 text-[#979797]"/>

                {/* <div className="absolute w-2 h-0.5 top-1.5 left-1">
                    <div className="left-0 absolute w-0.5 h-0.5 top-0 bg-neutralsub-content rounded-[1.17px]" />
                    <div className="left-1.5 absolute w-0.5 h-0.5 top-0 bg-neutralsub-content rounded-[1.17px]" />
                  </div> */}
              </div>
            </div>
          </div>

          {/* BellIcon icon */}
          <div className="flex w-8 h-8 items-center justify-center gap-2.5 relative">
            <BellIcon className="w-5 h-5 text-[#979797]" />
          </div>

          {/* Date selector */}
          <div className="md:flex items-start gap-4 relative">
            <div className="items-start flex-[0_0_auto] inline-flex relative">
              <div className="bg-neutralbg inline-flex items-start gap-4 relative flex-[0_0_auto] rounded-lg">
                <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                  <div className="inline-flex h-8 items-center gap-6 px-4 py-[8.5px] relative rounded-lg overflow-hidden">
                    <div className="inline-flex items-center gap-2 relative flex-[0_0_auto] mt-[-2.50px] mb-[-2.50px]">
                      <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
                        <div className="mt-[-1.00px] text-[#212121] relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
                          24-03-2001
                        </div>
                      </div>
                    </div>
                    <CalendarIcon/>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Outlet selector - responsive */}
          <div className="items-start flex-[0_0_auto] inline-flex relative">
            <div className="bg-neutralbg inline-flex items-start gap-4 relative flex-[0_0_auto] rounded-lg">
              <div className="inline-flex flex-col items-start gap-1.5 relative flex-[0_0_auto]">
                <div className="inline-flex h-8 items-center gap-2 lg:gap-6 px-2 lg:px-4 py-[8.5px] relative rounded-lg overflow-hidden">
                  <div className="inline-flex items-center gap-1 lg:gap-2 relative flex-[0_0_auto] mt-[-2.50px] mb-[-2.50px]">
                    <BuildingIcon className="w-4 h-4 text-[#212121]" />
                    <div className="hidden sm:inline-flex items-center gap-1 relative flex-[0_0_auto]">
                      <div className="mt-[-1.00px] text-[#212121] relative w-fit font-text-small-regular font-[number:var(--text-small-regular-font-weight)] text-[length:var(--text-small-regular-font-size)] tracking-[var(--text-small-regular-letter-spacing)] leading-[var(--text-small-regular-line-height)] whitespace-nowrap [font-style:var(--text-small-regular-font-style)]">
                        Outlet name
                      </div>
                    </div>
                  </div>
                  <ChevronDownIcon className="w-4 h-4 text-[#212121] mt-[-0.50px] mb-[-0.50px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Separator - hidden on mobile */}
          <Separator
            orientation="vertical"
            className="hidden lg:block h-8 bg-[#ebebeb]"
          />

          {/* Create button - responsive */}
          <Button className="h-8 bg-brandprimary hover:bg-brandprimary/90 text-white rounded-lg px-2 lg:px-3.5 py-1.5">
            <PlusIcon className="w-4 h-4 lg:mr-1" />
            <span className="hidden lg:inline font-text-small-medium font-[number:var(--text-small-medium-font-weight)] text-[length:var(--text-small-medium-font-size)] tracking-[var(--text-small-medium-letter-spacing)] leading-[var(--text-small-medium-line-height)] [font-style:var(--text-small-medium-font-style)]">
              Create
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
};
