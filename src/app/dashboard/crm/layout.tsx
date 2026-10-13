// src/app/dashboard/crm/layout.tsx — Dedicated Dashboard Layout Shell with Persistent Sidebar
'use client';

import React, { useState } from 'react';
import CRMSidebar from '@/components/CRMSidebar';
import CRMTopBar from '@/components/CRMTopBar';

export default function CRMDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] flex">
      {/* Desktop Persistent Sidebar */}
      <div className="hidden md:block w-64 flex-shrink-0 h-screen sticky top-0 z-30">
        <CRMSidebar />
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileSidebarOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div className="relative w-64 max-w-[80vw] h-full z-10 animate-slide-left">
            <CRMSidebar onCloseMobile={() => setMobileSidebarOpen(false)} />
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        <CRMTopBar onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)} />
        <div className="flex-1 overflow-x-hidden">
          {children}
        </div>
      </div>
    </div>
  );
}
