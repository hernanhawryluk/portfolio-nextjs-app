import type { LegalDocument } from "@/lib/types";
import duenosDelSillon from "@/content/terms/duenos-del-sillon";
import leeme from "@/content/terms/leeme";

// Each entry is published at /terms/<slug>.
export const termsOfService: LegalDocument[] = [leeme, duenosDelSillon];
