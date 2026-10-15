import Image from "next/image";

export function AwsAgenticBadge({
  size = "lg",
  priority = false,
  variant = "dark",
}: {
  size?: "lg" | "md" | "sm";
  priority?: boolean;
  variant?: "light" | "dark";
}) {
  const width = size === "lg" ? 274 : size === "md" ? 230 : 200;
  const onLight = variant === "light";
  return (
    // Official lockups, unmodified: dark type on light pages, white type on a
    // black field where the surrounding section is dark.
    <span className={`inline-flex max-w-full ${onLight ? "" : "bg-black"}`}>
      <Image
        src={
          onLight
            ? "/photos/aws-partner-ai-services-competency-agentic-ai-on-light.png"
            : "/photos/aws-partner-ai-services-competency-agentic-ai.png"
        }
        alt="AWS Partner — AI Services Competency — Agentic AI Consulting Services"
        width={274}
        height={120}
        priority={priority}
        unoptimized
        className="h-auto object-contain"
        style={{ width, maxWidth: "100%" }}
      />
    </span>
  );
}

export function AwsAiCompetencyBadge({ size = 96 }: { size?: number }) {
  return (
    <Image
      src="/photos/aws-partner-ai-services-competency.png"
      alt="AWS Partner — AI Services Competency"
      width={120}
      height={120}
      unoptimized
      className="h-auto object-contain"
      style={{ width: size, maxWidth: "100%" }}
    />
  );
}

export function AwsSpecializationsBadge({
  width = 314,
  variant = "dark",
}: {
  width?: number;
  variant?: "light" | "dark";
}) {
  const onLight = variant === "light";
  return (
    <span className={`inline-flex max-w-full ${onLight ? "" : "bg-black"}`}>
      <Image
        src={
          onLight
            ? "/photos/aws-partner-advanced-tier-specializations-on-light.png"
            : "/photos/aws-partner-advanced-tier-specializations.png"
        }
        alt="AWS Partner — Advanced Tier Services — AWS WAF Delivery, Amazon RDS Delivery, AI Services Competency, Amazon CloudFront Delivery"
        width={314}
        height={120}
        unoptimized
        className="h-auto object-contain"
        style={{ width, maxWidth: "100%" }}
      />
    </span>
  );
}

const compactBadges = {
  advanced: {
    src: "/photos/aws-badge-partner-advanced-tier-services.png",
    alt: "AWS Partner — Advanced Tier Services",
    width: 120,
    height: 120,
  },
  ai: {
    src: "/photos/aws-partner-ai-services-competency.png",
    alt: "AWS Partner — AI Services Competency",
    width: 120,
    height: 120,
  },
  rds: {
    src: "/photos/aws-partner-amazon-rds-delivery.png",
    alt: "AWS Partner — Amazon RDS Delivery",
    width: 120,
    height: 120,
  },
  waf: {
    src: "/photos/aws-partner-aws-waf-delivery.png",
    alt: "AWS Partner — AWS WAF Delivery",
    width: 120,
    height: 120,
  },
  allstar: {
    src: "/photos/business-allstar-2026.png",
    alt: "Business All-Star 2026 Accredited",
    width: 200,
    height: 200,
  },
} as const;

export type CredentialId =
  | keyof typeof compactBadges
  | "agentic"
  | "specializations";

export function CredentialRow({
  items,
  className = "flex flex-wrap justify-center items-center gap-6 mb-12",
}: {
  items: CredentialId[];
  className?: string;
}) {
  return (
    <div className={className}>
      {items.map((id) => {
        if (id === "agentic") {
          return <AwsAgenticBadge key={id} size="md" variant="light" />;
        }
        if (id === "specializations") {
          return <AwsSpecializationsBadge key={id} width={280} variant="light" />;
        }
        const badge = compactBadges[id];
        return (
          <Image
            key={id}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            unoptimized={id !== "allstar"}
            className="h-24 w-auto object-contain md:h-28"
          />
        );
      })}
    </div>
  );
}
