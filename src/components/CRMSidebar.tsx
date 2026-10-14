// src/components/CRMSidebar.tsx — Auto Bourn Dealership CRM Unified Sidebar
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home, Users, CalendarCheck, Headphones,
  FileText, BarChart2, ChevronRight, Car
} from 'lucide-react';

interface CRMSidebarProps {
  onCloseMobile?: () => void;
}

export default function CRMSidebar({ onCloseMobile }: CRMSidebarProps) {
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === '/dashboard/crm') {
      return pathname === '/dashboard/crm';
    }
    return pathname.startsWith(href);
  };

  const navItems = [
    {
      label: 'CRM Overview',
      href: '/dashboard/crm',
      icon: Home,
    },
    {
      label: 'Leads',
      href: '/dashboard/crm/leads',
      icon: Users,
    },
    {
      label: 'Follow-ups',
      href: '/dashboard/crm/follow-ups',
      icon: CalendarCheck,
    },
    {
      label: 'Call Scheduler',
      href: '/dashboard/crm/call-sessions',
      icon: Headphones,
    },
    {
      label: 'Customer Details',
      href: '/dashboard/crm/customer-details',
      icon: FileText,
    },
    {
      label: 'CRM Analytics',
      href: '/dashboard/crm/analytics',
      icon: BarChart2,
    },
  ];

  return (
    <aside
      className="w-[215px] min-w-[215px] max-w-[215px] bg-white border-r border-[#E9ECF1] flex flex-col justify-between h-full select-none shadow-[1px_0_6px_rgba(0,0,0,0.02)]"
      style={{
        width: '215px',
        minWidth: '215px',
        maxWidth: '215px',
        backgroundColor: '#FFFFFF',
        borderRight: '1px solid #E9ECF1',
      }}
    >
      {/* Top Header Logo */}
      <div>
        <div className="h-16 px-4 flex items-center gap-2.5 border-b border-[#E9ECF1]/80">
          <div className="w-8 h-8 rounded-full bg-[#F20D18] flex items-center justify-center text-white shadow-sm shadow-red-500/20 flex-shrink-0">
            <Car className="w-4 h-4" />
          </div>
          <div className="flex flex-col min-w-0">
            <span className="text-[13px] font-black tracking-wide text-[#F20D18] leading-tight truncate">
              AUTO BOURN
            </span>
            <span className="text-[9px] font-bold text-[#7C8493] tracking-wider uppercase truncate">
              DEALERSHIP CRM
            </span>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="py-5 px-2.5 space-y-1">
          {navItems.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                style={{
                  backgroundColor: active ? '#FFF0F0' : 'transparent',
                  color: active ? '#F20D18' : '#7C8493',
                  borderRadius: '10px',
                  padding: '9px 12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontWeight: active ? '700' : '500',
                  fontSize: '12px',
                  transition: 'all 0.15s ease',
                }}
                className={`flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs transition-all ${
                  active
                    ? 'bg-[#FFF0F0] text-[#F20D18] font-bold'
                    : 'text-[#7C8493] hover:text-[#252525] hover:bg-[#F7F5F1] font-medium'
                }`}
              >
                <Icon
                  className="w-4 h-4 flex-shrink-0"
                  style={{
                    width: '16px',
                    height: '16px',
                    color: active ? '#F20D18' : '#7C8493',
                  }}
                />
                <span className="truncate">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom User Profile Section */}
      <div className="p-3.5 border-t border-[#E9ECF1]">
        <div className="flex items-center gap-1.5 mb-2 px-1">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
          <span className="text-[10px] font-bold text-[#7C8493]">Online</span>
        </div>

        <Link
          href="/dashboard/crm"
          className="flex items-center justify-between p-1.5 rounded-xl hover:bg-[#F7F5F1] transition-colors group"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold ring-1 ring-[#E9ECF1] overflow-hidden flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                alt="Alex Johnson"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
            <div className="flex flex-col text-left truncate">
              <span className="text-xs font-bold text-[#252525] leading-tight truncate">
                Alex Johnson
              </span>
              <span className="text-[10px] text-[#7C8493] font-medium truncate">
                Sales Manager
              </span>
            </div>
          </div>
          <ChevronRight className="w-3.5 h-3.5 text-[#7C8493] group-hover:text-[#252525] transition-colors flex-shrink-0" />
        </Link>
      </div>
    </aside>
  );
}
