import React, { useState } from "react";
import { ScrollArea, ScrollBar } from "../../components/ui/scroll-area";
import { HeaderSection } from "./sections/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { NavigationMenuSection } from "./sections/NavigationMenuSection";

export const OutletHomepage = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col w-full h-screen bg-white">
      <HeaderSection 
        onMobileMenuToggle={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        isMobileMenuOpen={isMobileMenuOpen}
      />
      <div className="flex flex-1 min-h-0">
        {/* Desktop Navigation */}
        <aside className="hidden lg:block w-auto">
          <NavigationMenuSection />
        </aside>
        
        {/* Mobile Navigation Overlay - Full Screen */}
        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="fixed inset-0 z-50 lg:hidden">
              <NavigationMenuSection onClose={() => setIsMobileMenuOpen(false)} />
            </div>
          </>
        )}
        
        <main className="flex-1 overflow-y-auto min-h-0">
          <MainContentSection />
        </main>
      </div>
    </div>
  );
};