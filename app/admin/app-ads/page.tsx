import type { Metadata } from "next";
import { AppAdsAdminForm } from "@/app/admin/app-ads/AppAdsAdminForm";

export const metadata: Metadata = {
  title: "app-ads.txt Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AppAdsAdminPage() {
  return <AppAdsAdminForm />;
}
