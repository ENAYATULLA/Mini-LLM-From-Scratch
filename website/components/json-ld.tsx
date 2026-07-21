import { siteConfig, author } from "@/lib/site-config";

export function OrganizationJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    url: author.portfolio,
    sameAs: [
      author.github,
      author.linkedin,
      author.portfolio,
    ],
    jobTitle: author.role,
    email: author.email,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SoftwareJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "SoftwareSourceCode",
    name: siteConfig.name,
    description: siteConfig.description,
    codeRepository: siteConfig.repository,
    programmingLanguage: "Python",
    runtimePlatform: "PyTorch",
    license: "https://opensource.org/licenses/MIT",
    author: {
      "@type": "Person",
      name: author.name,
      url: author.portfolio,
    },
    url: siteConfig.url,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}