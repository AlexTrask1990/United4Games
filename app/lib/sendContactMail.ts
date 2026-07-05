import { ContactFormData } from "@/app/types/contactForm";
import { ApiKeys } from "@/app/lib/apiConfig";

export const sendContactMail = async (
  formData: ContactFormData,
): Promise<boolean> => {
  try {
    const response = await fetch(ApiKeys.CONTACT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    return response.ok;
  } catch (error) {
    console.error("Send mail error:", error);
    return false;
  }
};
