"use client";

import { useState } from "react";
import { Edit3, Info } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AccountDetails() {
  const [status, setStatus] = useState<"active" | "inactive">("active");

  return (
    <section className="col-span-8 bg-surface-container-lowest flex flex-col h-screen overflow-y-auto custom-scrollbar">
      {/* header */}
      <div className="p-6 bg-surface-container-low border-b border-outline-variant flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Edit3 className="w-5 h-5 text-primary" />
          <h3 className="font-headline-md text-headline-md text-on-surface">
            Chart Of Account Details
          </h3>
        </div>
        <span className="px-3 py-1 bg-green-100 text-green-700 text-body-sm rounded-full border border-green-200 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Last Saved: 2 mins ago
        </span>
      </div>

      {/* form */}
      <form
        className="p-10 space-y-6 flex-1"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Account ID (readonly) */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Account ID
          </label>
          <div className="col-span-9">
            <Input
              readOnly
              value="010108"
              className="w-full px-4 py-2 bg-surface-container border border-outline-variant rounded text-body-md text-on-surface-variant cursor-not-allowed font-mono"
            />
            <p className="text-[11px] text-on-surface-variant mt-1 italic opacity-70">
              Auto-generated based on parent category.
            </p>
          </div>
        </div>

        {/* Account Name */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Account Name
          </label>
          <div className="col-span-9">
            <Input
              placeholder="e.g. Employee Advances"
              className="w-full px-4 py-2 bg-white border border-outline-variant rounded text-body-md shadow-sm"
            />
          </div>
        </div>

        {/* Abbreviation */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Abbreviation
          </label>
          <div className="col-span-9">
            <select className="w-full px-4 py-2 bg-white border border-outline-variant rounded text-body-md appearance-none cursor-pointer">
              <option value="">- SELECT -</option>
              <option value="ADV">ADV - Advances</option>
              <option value="REC">REC - Receivables</option>
              <option value="BNK">BNK - Banking</option>
              <option value="CSH">CSH - Cash</option>
            </select>
          </div>
        </div>

        {/* Level */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Level
          </label>
          <div className="col-span-9 flex items-center gap-4">
            <Input
              readOnly
              type="number"
              value="3"
              className="w-24 px-4 py-2 bg-surface-container-high border border-outline-variant rounded text-body-md text-on-surface-variant"
            />
            <span className="text-body-sm text-on-surface-variant">
              Deeply nested leaf node
            </span>
          </div>
        </div>

        {/* Opening Balance */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Opening Balance
          </label>
          <div className="col-span-9 flex items-center">
            <span className="px-4 py-2 bg-surface-container border border-r-0 border-outline-variant rounded-l text-on-surface-variant text-label-md">
              USD
            </span>
            <Input
              placeholder="0.00"
              className="flex-1 px-4 py-2 bg-white border border-outline-variant rounded-l-none rounded-r text-body-md text-right shadow-sm font-mono"
            />
          </div>
        </div>

        {/* Status Toggle */}
        <div className="grid grid-cols-12 gap-6 items-center">
          <label className="col-span-3 text-right text-label-md text-on-surface-variant">
            Status
          </label>
          <div className="col-span-9">
            <div className="inline-flex p-1 bg-surface-container rounded-lg border border-outline-variant">
              <button
                type="button"
                onClick={() => setStatus("active")}
                className={`px-6 py-1 text-label-md rounded transition-all active:scale-95 ${
                  status === "active"
                    ? "bg-primary text-white shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                Active
              </button>
              <button
                type="button"
                onClick={() => setStatus("inactive")}
                className={`px-6 py-1 text-label-md rounded transition-all active:scale-95 ${
                  status === "inactive"
                    ? "bg-primary text-white shadow-sm"
                    : "text-on-surface-variant hover:bg-surface-container-highest"
                }`}
              >
                Inactive
              </button>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="pt-10 mt-10 border-t border-outline-variant flex justify-end items-center gap-4 pb-10">
          <Button
            type="button"
            variant="ghost"
            className="px-6 py-2 text-label-md text-on-surface-variant hover:text-on-surface h-auto"
          >
            Discard Changes
          </Button>
          <Button
            type="submit"
            className="px-8 py-2 bg-primary-container text-on-primary-container text-label-md rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 h-auto"
          >
            <span className="material-symbols-outlined text-base">
              add_circle
            </span>
            Create Account
          </Button>
        </div>
      </form>

      {/* Audit footer */}
      <div className="p-6 bg-surface-container-low border-t border-outline-variant">
        <div className="flex items-start gap-4">
          <Info className="w-5 h-5 text-tertiary mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-label-md text-tertiary">Audit Perspective</p>
            <p className="text-body-sm text-on-surface-variant opacity-80 leading-relaxed mt-1">
              Creating a new leaf node will require a mandatory initial
              reconciliation if the opening balance is non-zero. This action is
              tracked under the compliance ID: ACC-3342.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}