import { Account, AccountTree } from "@/types/account";

export function buildTree(accounts: Account[]): AccountTree[] {
  const map = new Map<string, AccountTree>();
  const roots: AccountTree[] = [];

  accounts.forEach((acc) => map.set(acc.id, { ...acc, children: [] }));

  accounts.forEach((acc) => {
    const node = map.get(acc.id)!;
    if (acc.parentId && map.has(acc.parentId)) {
      map.get(acc.parentId)!.children!.push(node);
    } else {
      roots.push(node);
    }
  });

  return roots;
}

// Rule: Max depth is 4
export function canAddChild(parentLevel: number): boolean {
  return parentLevel < 4;
}

// Rule: Level 1 cannot be created or edited
export function isLevelLocked(account: Account): boolean {
  return account.level === 1;
}
