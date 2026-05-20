  "use client";
  import {
    ChevronRight,
    ChevronDown,
    Folder,
    FolderOpen,
    Lock,
    Wallet,
    TrendingUp,
    FileText,
    PieChart,
    Pencil,
    Plus,
  } from "lucide-react";
  import { AccountTree } from "@/types/account";

  interface NodeProps {
    node: {
      data: AccountTree;
      isOpen: boolean;
      children: any[];
      toggle: () => void;
      isSelected: boolean;
    };
    style: React.CSSProperties;
    attrs: { [key: string]: any };
  }

  const getIcon = (data: AccountTree & { isOpen?: boolean }) => {
    const isCategory = data.type === "category";
    const isLevel4 = data.level === 4;

    // Level 4 leaf → file icon
    if (isLevel4 && !isCategory) {
      return <FileText size={18} className="text-primary" />;
    }

    if (isCategory) {
      return data.isOpen ? (
        <FolderOpen size={18} className="text-primary" />
      ) : (
        <Folder size={18} className="text-primary" />
      );
    }

    // Account icons by code prefix — your codes start with "0X"
    if (data.code.startsWith("01"))
      return <TrendingUp size={18} className="text-primary" />; // Assets
    if (data.code.startsWith("02"))
      return <Lock size={18} className="text-primary" />; // Liabilities
    if (data.code.startsWith("03"))
      return <PieChart size={18} className="text-primary" />; // Capital
    if (data.code.startsWith("04"))
      return <TrendingUp size={18} className="text-primary" />; // Revenue
    if (data.code.startsWith("05"))
      return <Wallet size={18} className="text-primary" />; // Expense

    return <Wallet size={18} className="text-primary" />;
  };

  export function TreeNode({ node, style, attrs }: NodeProps) {
    const { data, isOpen, isSelected } = node;
    const hasChildren = node.children.length > 0;
    const isCategory = data.type === "category";
    const isLevel4 = data.level === 4;

    return (
      <div
        {...attrs}
        style={style}
        className={`flex items-center gap-2 px-3 py-2.5 cursor-pointer
                    hover:bg-surface-container-high/50 transition-colors group
                    rounded-lg mx-2
                    ${isSelected ? "bg-primary/10 border-l-2 border-primary" : ""}`}
      >
        {/* Expand/Collapse */}
        {hasChildren ? (
          <button
            onClick={(e) => {
              e.stopPropagation();
              node.toggle();
            }}
            className="p-1 text-outline-variant hover:text-on-surface rounded-md
                      hover:bg-surface-container-high transition-colors"
          >
            {isOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
          </button>
        ) : (
          <div className="w-6" />
        )}

        {/* Icon + Info */}
        <div className="flex items-center gap-3 flex-1 min-w-0">
          <div className="shrink-0">{getIcon({ ...data, isOpen })}</div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-on-surface truncate">
                {data.code} - {data.name}
              </span>
              {/* Level-4 pill badge */}
              {isLevel4 && !isCategory && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full
                                bg-primary/10 text-primary text-[10px] font-semibold shrink-0"
                >
                  <FileText size={10} />
                  File
                </span>
              )}
            </div>

            <div className="flex items-center gap-2 mt-0.5">
              {data.balance && (
                <span className="text-xs text-on-surface-variant font-medium">
                  {data.balance}
                </span>
              )}
              {isCategory && (
                <span className="text-[10px] font-semibold tracking-[.07em] uppercase text-on-surface-variant">
                  Category
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Hover actions — Lucide only, no Material Symbols */}
        {!isLevel4 && (
          <div className="opacity-0 group-hover:opacity-100 flex gap-1 transition-opacity shrink-0">
            <button
              className="p-1.5 rounded-md hover:bg-primary/10 text-primary transition-colors"
              onClick={(e) => e.stopPropagation()}
              title="Edit"
            >
              <Pencil size={14} />
            </button>
            {!isCategory && (
              <button
                className="p-1.5 rounded-md hover:bg-primary/10 text-primary transition-colors"
                onClick={(e) => e.stopPropagation()}
                title="Add Child"
              >
                <Plus size={14} />
              </button>
            )}
          </div>
        )}
      </div>
    );
  }
