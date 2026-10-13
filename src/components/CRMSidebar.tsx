// src/components/CRMSidebar.tsx — Spacious, Clean Luxury White & Red Sidebar
'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  CalendarClock, Activity, User, Users, CalendarCheck,
  PhoneCall, FileText, BarChart2, LogOut, ChevronRight, Car
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

  const topMenuItems = [
    {
      label: 'Test Drives',
      href: '/dashboard/crm/test-drives',
      icon: CalendarClock,
    },
    {
      label: 'Activity Logs',
      href: '/dashboard/crm/activity-logs',
      icon: Activity,
    },
  ];

  const crmMenuItems = [
    {
      label: 'CRM Overview',
      href: '/dashboard/crm',
      icon: User,
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
      label: 'Call Sessions',
      href: '/dashboard/crm/call-sessions',
      icon: PhoneCall,
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
    <aside className="w-64 bg-white border-r border-gray-100 flex flex-col justify-between h-full select-none shadow-[1px_0_10px_rgba(0,0,0,0.01)]">
      {/* Top Header Logo */}
      <div>
        <div className="h-20 px-6 flex items-center gap-3.5 border-b border-gray-50">
          <div className="w-9 h-9 rounded-xl bg-[#E10613] flex items-center justify-center text-white shadow-md shadow-red-500/20">
            <Car className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-black tracking-wider text-[#E10613] leading-tight">
              AUTO BOURN
            </span>
            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase">
              Dealership CRM
            </span>
          </div>
        </div>

        {/* Navigation Section */}
        <div className="py-6 px-4 space-y-1.5">
          {/* Top Quick Links */}
          {topMenuItems.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all ${
                  active
                    ? 'bg-red-50/90 text-[#E10613] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${active ? 'text-[#E10613]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                {active && <ChevronRight className="w-4 h-4 text-[#E10613]" />}
              </Link>
            );
          })}

          {/* CRM Section Category Header */}
          <div className="pt-6 pb-2 px-4">
            <span className="text-[11px] font-extrabold text-gray-400 tracking-wider uppercase block">
              CRM Operations
            </span>
          </div>

          {/* CRM Sub-Links */}
          {crmMenuItems.map((item) => {
            const active = isLinkActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onCloseMobile}
                className={`flex items-center justify-between px-4 py-3 rounded-2xl text-[13px] font-bold transition-all ${
                  active
                    ? 'bg-red-50/90 text-[#E10613] shadow-xs'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className={`w-4 h-4 ${active ? 'text-[#E10613]' : 'text-gray-400'}`} />
                  <span>{item.label}</span>
                </div>
                {active && <ChevronRight className="w-4 h-4 text-[#E10613]" />}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Bottom Sign Out */}
      <div className="p-4 border-t border-gray-100">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-2xl text-[13px] font-bold text-gray-500 hover:text-[#E10613] hover:bg-red-50/50 transition-all"
        >
          <LogOut className="w-4 h-4 text-gray-400" />
          <span>Sign Out</span>
        </Link>
      </div>
    </aside>
  );
}
