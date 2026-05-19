import ChartOfAccounts from "@/components/ChartOfAccounts/ChartOfAccounts";
import AccountDetails from "@/components/AccountDetails/AccountDetails";

export default function Page() {
  return (
    <main className="grid grid-cols-12 gap-0 h-screen overflow-hidden">
      <ChartOfAccounts />
      <AccountDetails />
    </main>
  );
}