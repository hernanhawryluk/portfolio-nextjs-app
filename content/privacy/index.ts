import type { LegalDocument } from "@/lib/types";
import duenosDelSillon from "@/content/privacy/duenos-del-sillon";
import leeme from "@/content/privacy/leeme";

// Each entry is published at /privacy/<slug>.
export const privacyPolicies: LegalDocument[] = [leeme, duenosDelSillon];
