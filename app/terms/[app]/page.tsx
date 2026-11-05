import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocument from "@/components/legal-document";
import { termsOfService } from "@/content/terms";

type TermsPageProps = {
  params: { app: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return termsOfService.map(({ slug }) => ({ app: slug }));
}

function getTerms(slug: string) {
  return termsOfService.find((terms) => terms.slug === slug);
}

export function generateMetadata({ params }: TermsPageProps): Metadata {
  const terms = getTerms(params.app);
  if (!terms) return {};

  return {
    title: `${terms.appName} | ${terms.content.en.title}`,
    description: terms.content.en.intro[0],
  };
}

export default function TermsPage({ params }: TermsPageProps) {
  const terms = getTerms(params.app);
  if (!terms) notFound();

  return <LegalDocument {...terms} />;
}
