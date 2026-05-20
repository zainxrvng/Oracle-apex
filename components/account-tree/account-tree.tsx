"use client";
import { Tree } from "react-arborist";
import { useAccounts } from "@/hooks/use-accounts";
import { useAccountStore } from "@/store/account-store";
import { TreeNode } from "./tree-node";
import { Skeleton } from "@/components/ui/skeleton";
import { Search, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export function AccountTree() {
  const { data, isLoading, refetch } = useAccounts();
  const setSelected = useAccountStore((s) => s.setSelectedAccountId);
  const [search, setSearch] = useState("");

  if (isLoading) {
    return (
      <div className="p-5 space-y-3">
        <Skeleton className="h-10 w-full rounded-xl" />
        <Skeleton className="h-9 w-5/6 rounded-xl" />
        <Skeleton className="h-9 w-4/6 rounded-xl" />
        <Skeleton className="h-9 w-5/6 rounded-xl ml-6" />
        <Skeleton className="h-9 w-4/6 rounded-xl ml-6" />
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="p-6 text-center text-on-surface-variant text-sm">
        No accounts found
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      {/* Search */}
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/20 bg-white/20">
        <Search size={15} className="text-outline shrink-0" />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search accounts…"
          className="bg-transparent border-none focus-visible:ring-0 h-8 text-[13px] placeholder:text-outline flex-1 px-0"
        />
        <Button
          variant="ghost"
          size="icon"
          onClick={() => {
            setSearch("");
            refetch();
          }}
          className="h-8 w-8 text-outline hover:text-primary hover:bg-primary/10 rounded-lg"
        >
          <RefreshCw size={14} />
        </Button>
      </div>

      {/* Tree */}
      <div
        className="flex-1 overflow-auto p-2"
        style={{ height: "calc(100% - 52px)" }}
      >
        <Tree
          data={data}
          width="100%"
          height={480}
          rowHeight={46}
          indent={22}
          searchTerm={search}
          searchMatch={(node, term) =>
            node.data.name.toLowerCase().includes(term.toLowerCase()) ||
            node.data.code.toLowerCase().includes(term.toLowerCase())
          }
          onSelect={(nodes) => setSelected(nodes[0]?.data.id || null)}
        >
          {TreeNode}
        </Tree>
      </div>
    </div>
  );
}
