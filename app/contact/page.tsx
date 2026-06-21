import { redirect } from "next/navigation";
import { externalLinks } from "@/app/lib/links";

export default function ContactPage() {
  redirect(externalLinks.contactUs);
}
