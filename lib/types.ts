import en from "@/locale/en";
import es from "@/locale/es";

export type SectionName = (typeof en.links)[number]["name"];

export type SectionNameEs = (typeof es.links)[number]["name"];

// A plain string is a paragraph; `list` items with a `label` render as "**label:** text".
export type PrivacyPolicyBlock =
  | string
  | { list: (string | { label: string; text: string })[] };

export type PrivacyPolicyContent = {
  intro: string[];
  sections: { heading: string; body: PrivacyPolicyBlock[] }[];
};

export type AppPrivacyPolicy = {
  slug: string; // URL: /privacy/<slug>
  appName: string;
  lastUpdated: string; // YYYY-MM-DD
  contactEmail: string;
  content: Record<"en" | "es", PrivacyPolicyContent>;
};
