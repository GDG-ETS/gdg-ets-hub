import { HubHeader } from "@/components/hub-header";
import { HubFooter } from "@/components/hub-footer";

export default function HubLayout({ children }: LayoutProps<"/">) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white"
      >
        Aller au contenu
      </a>
      <HubHeader />
      <main id="main" className="flex-1">
        {children}
      </main>
      <HubFooter />
    </div>
  );
}
