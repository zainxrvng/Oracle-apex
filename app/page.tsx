"use client";

import { AccountTree } from "@/components/account-tree/account-tree";
import { AccountDetail } from "@/components/account-detail/account-detail";
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable";
import {
  TrendingUp,
  DollarSign,
  Lock,
  PieChart,
  ChevronsDownUp,
  RefreshCw,
} from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen px-5 md:px-10 pt-9 pb-24 md:pb-12 max-w-7xl mx-auto space-y-4">
      {/* ── Summary Cards ── */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Total Assets — wide card */}
        <div className="glass-card md:col-span-2 relative overflow-hidden flex flex-col justify-between min-h-[160px]">
          <div className="pr-20">
            <p className="text-[11px] font-bold tracking-[0.08em] uppercase text-primary">
              Total Assets
            </p>
            <h3 className="text-[28px] font-extrabold tracking-tight text-on-surface mt-2 leading-none">
              $2,482,900.00
            </h3>
          </div>
          <div className="flex items-center gap-1.5 text-tertiary text-sm font-semibold mt-4">
            <TrendingUp size={16} />
            +12.5% this quarter
          </div>
          {/* Clay icon */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 w-14 h-14 rounded-[18px] clay-purple flex items-center justify-center">
            <DollarSign size={26} className="text-[#32258d]" />
          </div>
        </div>

        {/* Liabilities */}
        <div className="glass-card flex flex-col items-center justify-center text-center gap-2.5">
          <div className="w-14 h-14 rounded-full clay-teal flex items-center justify-center">
            <Lock size={22} className="text-[#003f44]" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant">
            Liabilities
          </p>
          <p className="text-2xl font-extrabold tracking-tight text-on-surface">
            $412,000
          </p>
        </div>

        {/* Equity */}
        <div className="glass-card flex flex-col items-center justify-center text-center gap-2.5">
          <div className="w-14 h-14 rounded-full clay-lavender flex items-center justify-center">
            <PieChart size={22} className="text-[#494457]" />
          </div>
          <p className="text-[11px] font-semibold tracking-[0.06em] uppercase text-on-surface-variant">
            Equity
          </p>
          <p className="text-2xl font-extrabold tracking-tight text-on-surface">
            $2,070,900
          </p>
        </div>
      </div>

      {/* ── Two-Panel ── */}
      <ResizablePanelGroup
        direction="horizontal"
        className="glass-panel overflow-hidden min-h-[580px]"
      >
        <ResizablePanel defaultSize={38} minSize={28}>
          <div className="px-5 py-4 border-b border-white/20 flex justify-between items-start">
            <div>
              <h2 className="text-[18px] font-bold text-on-surface">
                Account Hierarchy
              </h2>
              <p className="text-[12px] text-on-surface-variant mt-0.5">
                Manage organization chart
              </p>
            </div>
            <div className="flex gap-1">
              <button className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <ChevronsDownUp size={16} />
              </button>
              <button className="w-[30px] h-[30px] rounded-[8px] flex items-center justify-center text-primary hover:bg-primary/10 transition-colors">
                <RefreshCw size={16} />
              </button>
            </div>
          </div>
          <AccountTree />
        </ResizablePanel>

        <ResizableHandle
          withHandle
          className="bg-white/20 hover:bg-white/30 transition-colors w-[1px]"
        />

        <ResizablePanel defaultSize={62} minSize={40}>
          <AccountDetail />
        </ResizablePanel>
      </ResizablePanelGroup>
    </main>
  );
}
