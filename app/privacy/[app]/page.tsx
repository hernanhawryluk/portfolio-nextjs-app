import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LegalDocument from "@/components/legal-document";
import { privacyPolicies } from "@/content/privacy";

type PrivacyPageProps = {
  params: { app: string };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return privacyPolicies.map(({ slug }) => ({ app: slug }));
}

function getPolicy(slug: string) {
  return privacyPolicies.find((policy) => policy.slug === slug);
}

export function generateMetadata({ params }: PrivacyPageProps): Metadata {
  const policy = getPolicy(params.app);
  if (!policy) return {};

  return {
    title: `${policy.appName} | ${policy.content.en.title}`,
    description: policy.content.en.intro[0],
  };
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  const policy = getPolicy(params.app);
  if (!policy) notFound();

  return <LegalDocument {...policy} />;
}
