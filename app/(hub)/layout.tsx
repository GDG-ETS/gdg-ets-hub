import { HubHeader } from "@/components/hub-header";
import { HubFooter } from "@/components/hub-footer";

export default function HubLayout({ children }: LayoutProps<"/">) {
  return (
    <>
      <HubHeader />
      <main className="flex-1">{children}</main>
      <HubFooter />
    </>
  );
}
