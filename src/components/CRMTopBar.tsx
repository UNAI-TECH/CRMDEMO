// src/components/CRMTopBar.tsx — Spacious, Clean Top Header Bar
'use client';

import React from 'react';
import { Menu, Search, Bell, Car } from 'lucide-react';

interface CRMTopBarProps {
  onToggleSidebar?: () => void;
  searchQuery?: string;
  onSearchChange?: (val: string) => void;
  onOpenQuickAdd?: () => void;
}

export default function CRMTopBar({
  onToggleSidebar,
  searchQuery = '',
  onSearchChange,
  onOpenQuickAdd,
}: CRMTopBarProps) {
  return (
    <header className="h-20 bg-white/95 backdrop-blur-md border-b border-gray-100 px-6 sm:px-8 flex items-center justify-between sticky top-0 z-30 shadow-[0_1px_3px_rgba(0,0,0,0.01)]">
      {/* Left: Hamburger + Search Input */}
      <div className="flex items-center gap-4 flex-1 max-w-xl">
        <button
          onClick={onToggleSidebar}
          aria-label="Toggle menu"
          className="p-2.5 -ml-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-xl transition-colors md:hidden"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search leads, cars, phone, follow-ups..."
            value={searchQuery}
            onChange={(e) => onSearchChange?.(e.target.value)}
            className="w-full bg-gray-50/80 hover:bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400 text-xs sm:text-sm pl-11 pr-4 py-2.5 rounded-2xl border border-gray-200/70 focus:border-[#E10613] focus:ring-2 focus:ring-red-100 transition-all outline-none"
          />
        </div>
      </div>

      {/* Right: Notifications & Profile Avatar */}
      <div className="flex items-center gap-5">
        {/* Notification Bell */}
        <button
          aria-label="Notifications"
          className="relative p-2.5 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-2xl transition-colors border border-gray-100"
        >
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-[#E10613] text-white text-[10px] font-black rounded-full w-4 h-4 flex items-center justify-center ring-2 ring-white">
            23
          </span>
        </button>

        {/* User Profile Avatar with name */}
        <div className="flex items-center gap-3 pl-2 border-l border-gray-100">
          <div className="text-right hidden sm:block">
            <span className="block text-xs font-black text-gray-900">Auto Bourn Team</span>
            <span className="block text-[10px] font-bold text-gray-400">HQ Console</span>
          </div>
          <div className="w-10 h-10 rounded-2xl bg-[#E10613] flex items-center justify-center text-white shadow-sm ring-2 ring-red-100 hover:scale-105 transition-transform cursor-pointer">
            <Car className="w-5 h-5" />
          </div>
        </div>
      </div>
    </header>
  );
}
