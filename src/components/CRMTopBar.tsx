// src/components/CRMTopBar.tsx — Header bar matching Master Prompt specifications
'use client';

import React, { useState } from 'react';
import { Menu, Search, Bell, ChevronDown, User } from 'lucide-react';

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
  const [isNotifOpen, setIsNotifOpen] = useState(false);

  return (
    <header className="h-16 flex items-center sticky top-0 z-20 backdrop-blur-md bg-[#F7F5F1]/90 border-b border-[#E9ECF1]/80">
      <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 flex items-center justify-between">
        {/* Left: Mobile Toggle + Search Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={onToggleSidebar}
            aria-label="Toggle menu"
            className="p-2 -ml-2 text-[#7C8493] hover:text-[#252525] hover:bg-white rounded-xl transition-colors md:hidden"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Flexible search pill container with consistent 38px height */}
          <div
            className="flex items-center gap-2.5 bg-white rounded-full border border-[#E9ECF1] px-3.5 h-[38px] w-64 sm:w-80 shadow-[0_1px_3px_rgba(0,0,0,0.02)] transition-all focus-within:border-[#F20D18] focus-within:ring-2 focus-within:ring-red-100"
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '9999px',
              border: '1px solid #E9ECF1',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0 14px',
            }}
          >
            <Search className="w-4 h-4 text-[#7C8493] flex-shrink-0" style={{ width: '16px', height: '16px', color: '#7C8493' }} />
            <input
              type="text"
              placeholder="Search leads, customers..."
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="bg-transparent text-[#252525] placeholder-[#7C8493] text-xs w-full outline-none border-none p-0 focus:ring-0"
              style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '12px',
                color: '#252525',
                width: '100%',
                padding: '0',
              }}
            />
          </div>
        </div>

        {/* Right: Notifications, + Quick Add, User Profile — all 38px height on consistent horizontal line */}
        <div className="flex items-center gap-3 relative">
          {/* Notification Bell with red badge '3' */}
          <div className="relative">
            <button
              onClick={() => setIsNotifOpen(!isNotifOpen)}
              aria-label="Notifications"
              className="w-[38px] h-[38px] rounded-full bg-white border border-[#E9ECF1] text-[#7C8493] hover:text-[#252525] flex items-center justify-center transition-colors cursor-pointer relative shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '9999px',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E9ECF1',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Bell className="w-4 h-4" style={{ width: '16px', height: '16px', color: '#7C8493' }} />
              <span
                className="absolute -top-0.5 -right-0.5 bg-[#F20D18] text-white text-[9px] font-bold rounded-full w-4 h-4 flex items-center justify-center leading-none"
                style={{
                  backgroundColor: '#F20D18',
                  color: '#FFFFFF',
                  fontSize: '9px',
                  fontWeight: '700',
                  borderRadius: '9999px',
                  width: '16px',
                  height: '16px',
                }}
              >
                3
              </span>
            </button>

            {isNotifOpen && (
              <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-lg border border-[#E9ECF1] p-3 z-30 text-xs animate-fade-in">
                <div className="font-bold text-[#252525] pb-2 border-b border-[#E9ECF1] mb-2 flex items-center justify-between">
                  <span>Notifications</span>
                  <span className="text-[10px] text-[#F20D18] font-bold">3 Unread</span>
                </div>
                <div className="space-y-1.5">
                  <div className="p-2 bg-red-50/50 rounded-lg">
                    <p className="font-bold text-[#252525] text-[11px]">3 Overdue Follow-ups</p>
                    <p className="text-[10px] text-[#7C8493]">Scheduled calls pending action</p>
                  </div>
                  <div className="p-2 bg-emerald-50/50 rounded-lg">
                    <p className="font-bold text-[#252525] text-[11px]">New Lead Assigned</p>
                    <p className="text-[10px] text-[#7C8493]">Sarah Miller — Honda Civic</p>
                  </div>
                  <div className="p-2 bg-purple-50/50 rounded-lg">
                    <p className="font-bold text-[#252525] text-[11px]">Test Drive Today</p>
                    <p className="text-[10px] text-[#7C8493]">Priya Sharma — 11:30 AM</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* + Quick Add button with dropdown chevron (consistent 38px height) */}
          <button
            onClick={onOpenQuickAdd}
            className="inline-flex items-center gap-1.5 px-4 h-[38px] rounded-full bg-[#F20D18] hover:bg-[#D90812] text-white text-xs font-bold shadow-sm shadow-red-500/20 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            style={{
              backgroundColor: '#F20D18',
              color: '#FFFFFF',
              borderRadius: '9999px',
              height: '38px',
              padding: '0 16px',
              fontSize: '12px',
              fontWeight: '700',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <span>+ Quick Add</span>
            <ChevronDown className="w-3.5 h-3.5 opacity-90" />
          </button>

          {/* User profile circular avatar button (consistent 38px height) */}
          <button
            aria-label="User Profile"
            className="w-[38px] h-[38px] rounded-full bg-white text-[#7C8493] flex items-center justify-center hover:bg-gray-50 transition-colors border border-[#E9ECF1] cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.02)]"
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '9999px',
              backgroundColor: '#FFFFFF',
              border: '1px solid #E9ECF1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <User className="w-4 h-4 text-[#7C8493]" style={{ width: '16px', height: '16px', color: '#7C8493' }} />
          </button>
        </div>
      </div>
    </header>
  );
}
