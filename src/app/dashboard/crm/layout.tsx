// src/app/dashboard/crm/layout.tsx — Dedicated Dashboard Layout Shell matching reference
'use client';

import React, { useState } from 'react';
import CRMSidebar from '@/components/CRMSidebar';
import CRMTopBar from '@/components/CRMTopBar';
import AddLeadModal from '@/components/AddLeadModal';

export default function CRMDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [isQuickAddOpen, setIsQuickAddOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F5F1] text-[#252525] flex selection:bg-red-500/20 antialiased font-sans">
      {/* Desktop Persistent Sidebar (215px consistent desktop width) */}
      <div className="hidden md:block w-[215px] min-w-[215px] max-w-[215px] flex-shrink-0 h-screen sticky top-0 z-30">
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
        <CRMTopBar
          onToggleSidebar={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          onOpenQuickAdd={() => setIsQuickAddOpen(true)}
        />
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>
      </div>

      {/* Universal Quick Add Modal */}
      <AddLeadModal
        isOpen={isQuickAddOpen}
        onClose={() => setIsQuickAddOpen(false)}
        onLeadAdded={() => {
          window.dispatchEvent(new Event('lead-added'));
        }}
      />
    </div>
  );
}
