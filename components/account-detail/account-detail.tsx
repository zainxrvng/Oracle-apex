"use client";

import { useAccountStore } from "@/store/account-store";
import { useAccountDetail } from "@/hooks/use-account-detail";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { FileText, Lock } from "lucide-react";
import { useState } from "react";

export function AccountDetail() {
  const selectedId = useAccountStore((s) => s.selectedAccountId);
  const { data: account, isLoading } = useAccountDetail(selectedId);
  const [status, setStatus] = useState(true);

  // Empty State
  if (!selectedId) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-center p-8 gap-4">
        <div className="w-16 h-16 rounded-2xl bg-primary-container/50 flex items-center justify-center">
          <FileText className="w-8 h-8 text-on-primary-container" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-on-surface">
            No Account Selected
          </h3>
          <p className="text-sm text-on-surface-variant mt-1 max-w-[220px]">
            Select an account from the hierarchy to view or edit its details
          </p>
        </div>
      </div>
    );
  }

  // Loading State
  if (isLoading) {
    return (
      <div className="p-8 space-y-5">
        <Skeleton className="h-8 w-1/3 rounded-xl" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
        <Skeleton className="h-10 w-full rounded-none" />
      </div>
    );
  }

  if (!account) return null;

  // ✅ Level 1 = completely locked (no edits allowed)
  const isLevel1 = account.level === 1;

  return (
    <div className="p-8 h-full overflow-y-auto">
      {/* Header */}
      <div className="mb-8 flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl clay-primary flex items-center justify-center shadow-glass-lg shrink-0">
          <FileText className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-extrabold tracking-tight text-on-surface">
            Account Details
          </h2>
          <p className="text-sm text-on-surface-variant font-medium mt-0.5">
            Editing {account.code} - {account.name}
          </p>
        </div>
      </div>

      {/* 🔒 Level 1 Lock Banner */}
      {isLevel1 && (
        <div className="mb-6 p-4 rounded-xl bg-surface-container-high border border-outline-variant/30 flex items-start gap-3">
          <Lock className="w-5 h-5 text-outline-variant mt-0.5 shrink-0" />
          <div>
            <p className="text-sm font-semibold text-on-surface">
              System Account — Read Only
            </p>
            <p className="text-sm text-on-surface-variant mt-0.5">
              Level 1 entries are predefined and cannot be modified. Create
              sub-accounts under this category instead.
            </p>
          </div>
        </div>
      )}

      {/* Form Fields — ALL disabled when isLevel1 */}
      <div
        className={`space-y-5 max-w-2xl ${isLevel1 ? "opacity-60 pointer-events-none" : ""}`}
      >
        {/* Account ID */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
            Account ID
          </label>
          <input
            value={account.code}
            disabled
            className="w-full bg-white/20 border-0 border-b border-outline-variant/40 
                       focus:border-primary focus:ring-0 px-0 h-10 transition-colors
                       disabled:opacity-70 disabled:cursor-not-allowed"
          />
        </div>

        {/* Account Name */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
            Account Name
          </label>
          <input
            type="text"
            defaultValue={account.name}
            disabled={isLevel1}
            className="w-full bg-white/20 border-0 border-b border-outline-variant/40 
                       focus:border-primary focus:ring-0 px-0 h-10 transition-colors
                       disabled:opacity-70 disabled:cursor-not-allowed"
          />
        </div>

        {/* Abbreviation */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
            Abbreviation
          </label>
          <select
            defaultValue={account.abbreviation || ""}
            disabled={isLevel1}
            className="w-full bg-white/20 border-0 border-b border-outline-variant/40 
                       focus:border-primary focus:ring-0 px-0 h-10 transition-colors
                       appearance-none disabled:opacity-70 disabled:cursor-not-allowed"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24'%3E%3Cpath fill='%23787583' d='M7 10l5 5 5-5z'/%3E%3C/svg%3E")`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0 center",
            }}
          >
            <option value="">-SELECT-</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* Level */}
        <div>
          <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
            Level
          </label>
          <input
            type="text"
            value={account.level}
            disabled
            className="w-full bg-white/20 border-0 border-b border-outline-variant/40 
                       focus:border-primary focus:ring-0 px-0 h-10 transition-colors
                       disabled:opacity-70 disabled:cursor-not-allowed"
          />
        </div>

        {/* Opening Balance & Status */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-2 block">
              Opening Balance
            </label>
            <input
              type="number"
              defaultValue={account.openingBalance || 0}
              disabled={isLevel1}
              className="w-full bg-white/20 border-0 border-b border-outline-variant/40 
                         focus:border-primary focus:ring-0 px-0 h-10 transition-colors
                         disabled:opacity-70 disabled:cursor-not-allowed"
            />
          </div>

          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3 block">
              Status
            </label>
            <div className="flex items-center gap-3">
              <Switch
                checked={status}
                onCheckedChange={isLevel1 ? undefined : setStatus}
                disabled={isLevel1}
                className="data-[state=checked]:bg-primary transition-colors disabled:opacity-50"
              />
              <span
                className={`text-sm font-medium ${status ? "text-tertiary" : "text-on-surface-variant"}`}
              >
                {status ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* Save Button — disabled for Level 1 */}
        <div className="pt-6 flex justify-end">
          <button
            disabled={isLevel1}
            className={`flex items-center gap-2 font-bold py-3 px-8 rounded-xl transition-all
              ${
                isLevel1
                  ? "bg-outline-variant/20 text-on-surface-variant cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 text-on-primary hover:-translate-y-0.5 shadow-glass"
              }`}
          >
            <Lock size={18} className={isLevel1 ? "" : "hidden"} />
            <span>{isLevel1 ? "Locked" : "Save Changes"}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
