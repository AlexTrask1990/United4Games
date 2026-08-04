import type { Metadata } from "next";
import { AdminGate } from "@/app/admin/AdminGate";

export const metadata: Metadata = {
  title: "Admin",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminGate />;
}
