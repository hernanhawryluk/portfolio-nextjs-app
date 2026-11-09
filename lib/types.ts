import en from "@/locale/en";
import es from "@/locale/es";

export type SectionName = (typeof en.links)[number]["name"];

export type SectionNameEs = (typeof es.links)[number]["name"];

// A plain string is a paragraph. Text can use **bold**, *italics* and [text](url)
// links; bare URLs, email addresses and +phone numbers become links too.
export type LegalBlock =
  | string
  | { list: LegalListItem[] }
  | { subheading: string }
  | { table: { head: string[]; rows: string[][] } };

// An array is a list item with several blocks, such as a line followed by a nested list.
export type LegalListItem = string | LegalBlock[];

export type LegalDocumentContent = {
  title: string;
  intro: string[];
  sections: { heading: string; body: LegalBlock[] }[];
};

export type LegalDocument = {
  slug: string; // URL: /privacy/<slug> or /terms/<slug>
  appName: string;
  lastUpdated: string; // YYYY-MM-DD
  content: Record<"en" | "es", LegalDocumentContent>;
};
