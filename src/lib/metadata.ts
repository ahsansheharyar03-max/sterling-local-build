import type { Metadata } from "next";

const SITE_NAME = "Sterling Local";
const SITE_URL = "https://sterlinglocal.online";
const DEFAULT_DESCRIPTION =
  "Sterling Local builds AI-powered automation systems for plumbers, HVAC, electricians, roofers, and contractors — eliminating repetitive admin work and helping local service businesses run smoother every day.";

export function buildMetadata({
  title,
  description = DEFAULT_DESCRIPTION,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export const siteConfig = {
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  email: "info@sterlinglocal.online",
};
