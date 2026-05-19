"use client";

import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronRight,
  FolderOpen,
  Folder,
  Plus,
  MoreVertical,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ── type definitions ── */
type TreeNode = {
  id: string;
  label: string;
  code: string;
  children?: TreeNode[];
  defaultOpen?: boolean;
  defaultActive?: boolean;
};

/* ── tree data ── */
const TREE_DATA: TreeNode[] = [
  {
    id: "01",
    code: "01",
    label: "ASSETS",
    defaultOpen: true,
    defaultActive: true,
    children: [
      {
        id: "0101",
        code: "0101",
        label: "Current Assets",
        defaultOpen: true,
        children: [
          { id: "010101", code: "010101", label: "Bank Account" },
          { id: "010102", code: "010105", label: "Cash Account" },
          { id: "010103", code: "010106", label: "Account Receivable" },
          { id: "010104", code: "010107", label: "Inventory" },
        ],
      },
      { id: "0102", code: "0102", label: "Other Assets" },
      { id: "0103", code: "0103", label: "Fixed Assets" },
    ],
  },
  { id: "02", code: "02", label: "LIABILITIES" },
  { id: "03", code: "03", label: "CAPITAL" },
  { id: "04", code: "04", label: "REVENUE" },
  { id: "05", code: "05", label: "EXPENSE" },
  { id: "06", code: "06", label: "MM GARMENTS SADDAR" },
];

/* ── TreeNode component ── */
function TreeNodeItem({
  node,
  activeId,
  onSelect,
  depth = 0,
}: {
  node: TreeNode;
  activeId: string | null;
  onSelect: (id: string) => void;
  depth?: number;
}) {
  const hasChildren = !!node.children?.length;
  const [open, setOpen] = useState(!!node.defaultOpen);
  const isActive = activeId === node.id;
  const isParentActive = node.defaultActive && depth === 0 && !activeId;

  const active = isActive || !!isParentActive;

  return (
    <div>
      <div
        onClick={() => {
          if (hasChildren) setOpen(!open);
          onSelect(node.id);
        }}
        className={cn(
          "flex items-center gap-2 px-3 py-1 rounded cursor-pointer transition-colors group select-none",
          active
            ? "bg-primary/20 border border-primary/40 text-primary"
            : "text-on-surface-variant hover:bg-surface-container-highest"
        )}
      >
        {/* chevron */}
        <span className="w-5 flex-shrink-0 flex justify-center">
          {hasChildren ? (
            open ? (
              <ChevronDown className="w-4 h-4 transition-transform" />
            ) : (
              <ChevronRight className="w-4 h-4" />
            )
          ) : (
            <span className="w-4" />
          )}
        </span>

        {/* folder icon */}
        {hasChildren ? (
          open ? (
            <FolderOpen className="w-4 h-4 fill-primary/20" />
          ) : (
            <Folder className="w-4 h-4" />
          )
        ) : (
          <Folder className="w-4 h-4" />
        )}

        {/* label */}
        <span className="text-label-md flex-1 truncate">
          {node.code} : {node.label}
        </span>

        {/* more */}
        <MoreVertical className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
      </div>

      {/* children */}
      {hasChildren && open && (
        <div className="ml-6 space-y-0.5 mt-0.5">
          {node.children!.map((child) => (
            <TreeNodeItem
              key={child.id}
              node={child}
              activeId={activeId}
              onSelect={onSelect}
              depth={depth + 1}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── main component ── */
export default function ChartOfAccounts() {
  const [activeId, setActiveId] = useState<string | null>("01");
  const [search, setSearch] = useState("");

  return (
    <section className="col-span-4 bg-surface-container border-r border-outline-variant flex flex-col h-screen">
      {/* header */}
      <div className="p-6 bg-surface-container-high border-b border-outline-variant flex flex-col gap-4">
        <h3 className="font-headline-md text-headline-md text-on-surface">
          Chart of Account Menu
        </h3>
        <div className="relative">
          <Search className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 text-outline" />
          <Input
            placeholder="Search accounts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 py-2 border-outline-variant rounded-full text-body-sm bg-surface h-8 text-xs"
          />
        </div>
      </div>

      {/* tree */}
      <div className="p-4 flex-1 overflow-y-auto custom-scrollbar space-y-1">
        {TREE_DATA.map((node) => (
          <TreeNodeItem
            key={node.id}
            node={node}
            activeId={activeId}
            onSelect={setActiveId}
          />
        ))}
      </div>

      {/* footer button */}
      <div className="p-6 bg-surface-container-high border-t border-outline-variant">
        <Button
          variant="outline"
          className="w-full py-4 flex justify-center items-center gap-2 border-primary text-primary hover:bg-primary/5 rounded-lg h-auto text-label-md"
        >
          <Plus className="w-4 h-4" />
          Expand All Nodes
        </Button>
      </div>
    </section>
  );
}