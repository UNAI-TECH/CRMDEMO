// src/app/dashboard/crm/activity-logs/page.tsx — CRM Activity Audit Trail
'use client';

import React, { useState, useEffect } from 'react';
import {
  Activity, PhoneCall, CalendarClock, MessageSquare,
  ShieldCheck, Car, Search, Filter, Clock, User
} from 'lucide-react';
import { crmService } from '@/lib/crm-service';
import { Lead } from '@/types/crm';

export default function ActivityLogsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterType, setFilterType] = useState<string>('all');
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const l = await crmService.getLeads();
        setLeads(l);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  // Aggregate mock & real timeline logs
  const activityLogs = [
    {
      id: 'act-1',
      type: 'test_drive',
      title: 'Test Drive Scheduled',
      description: 'Scheduled BMW M4 Competition test drive at Showroom Flagship with Priya Sharma.',
      actor: 'Vikram Mehta (RM)',
      timestamp: 'Today, 11:30 AM',
      customer: 'Priya Sharma',
      badge: 'Test Drive',
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      id: 'act-2',
      type: 'call',
      title: 'Consultative Discovery Call',
      description: 'Discussed Mercedes-Benz E-Class AMG Line. Client requested bank financing terms and trade-in inspection.',
      actor: 'Ananya Roy (Senior RM)',
      timestamp: 'Today, 10:15 AM',
      customer: 'Rajesh Varma',
      badge: 'Discovery Call',
      badgeColor: 'bg-blue-50 text-blue-700 border-blue-200',
    },
    {
      id: 'act-3',
      type: 'status_change',
      title: 'Deal Advanced to Booking Done',
      description: 'Token payment of ₹2,00,000 confirmed for Porsche 911 Carrera. Inventory locked.',
      actor: 'Rohit Kulkarni (Sales Lead)',
      timestamp: 'Yesterday, 04:45 PM',
      customer: 'Kabir Singhania',
      badge: 'Milestone Won',
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'act-4',
      type: 'dedupe',
      title: 'Duplicate Inquiry Merged',
      description: 'Prospect Raghavendra Rao submitted repeat inquiry for Audi RS5. Automatically appended to existing lead notes with zero pipeline leakage.',
      actor: 'Auto Bourn Dedupe Engine',
      timestamp: 'Yesterday, 02:10 PM',
      customer: 'Raghavendra Rao',
      badge: 'Deduplicated',
      badgeColor: 'bg-amber-50 text-amber-700 border-amber-200',
    },
    {
      id: 'act-5',
      type: 'note',
      title: 'Client Preference Note Added',
      description: 'Prefers White exterior with Tan Leather interior. Delivery requested before upcoming festival weekend.',
      actor: 'Vikram Mehta (RM)',
      timestamp: '2 days ago',
      customer: 'Arjun Nambiar',
      badge: 'Internal Note',
      badgeColor: 'bg-gray-100 text-gray-700 border-gray-200',
    },
  ];

  const filteredLogs = activityLogs.filter((log) => {
    if (filterType !== 'all' && log.type !== filterType) return false;
    if (search && !log.title.toLowerCase().includes(search.toLowerCase()) && !log.customer.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="p-6 sm:p-8 max-w-7xl mx-auto w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-[#E10613] text-xs font-bold mb-2">
            <Activity className="w-3.5 h-3.5" />
            <span>Operational Audit Trail</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Activity Logs
          </h1>
          <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
            Complete transparent chronological record of client communications, test drives, and deal milestones.
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search activity or client..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white text-gray-900 placeholder-gray-400 text-xs sm:text-sm pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#E10613] outline-none shadow-xs"
          />
        </div>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {[
          { key: 'all', label: 'All Activities' },
          { key: 'test_drive', label: 'Test Drives' },
          { key: 'call', label: 'Discovery Calls' },
          { key: 'status_change', label: 'Stage Transitions' },
          { key: 'dedupe', label: 'System Deduplication' },
          { key: 'note', label: 'Team Notes' },
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilterType(f.key)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
              filterType === f.key
                ? 'bg-[#E10613] text-white shadow-sm shadow-red-200'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Timeline Stream */}
      <div className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-8 shadow-xs divide-y divide-gray-100">
        {filteredLogs.map((log) => (
          <div key={log.id} className="py-5 first:pt-0 last:pb-0 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-700 flex-shrink-0 mt-0.5">
              {log.type === 'test_drive' && <Car className="w-5 h-5 text-purple-600" />}
              {log.type === 'call' && <PhoneCall className="w-5 h-5 text-blue-600" />}
              {log.type === 'status_change' && <ShieldCheck className="w-5 h-5 text-emerald-600" />}
              {log.type === 'dedupe' && <Activity className="w-5 h-5 text-amber-600" />}
              {log.type === 'note' && <MessageSquare className="w-5 h-5 text-gray-600" />}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <div className="flex items-center gap-2.5">
                  <span className="text-sm font-bold text-gray-900">{log.title}</span>
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold border ${log.badgeColor}`}>
                    {log.badge}
                  </span>
                </div>
                <span className="text-xs text-gray-400 font-medium flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {log.timestamp}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-gray-600 mb-2 leading-relaxed">
                {log.description}
              </p>

              <div className="flex items-center gap-4 text-xs text-gray-400">
                <span className="flex items-center gap-1 font-medium text-gray-500">
                  <User className="w-3.5 h-3.5" />
                  Client: <strong className="text-gray-700">{log.customer}</strong>
                </span>
                <span>•</span>
                <span>Logged by: <strong className="text-gray-700">{log.actor}</strong></span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
