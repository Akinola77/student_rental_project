import Image from "next/image";

export function AwsAgenticBadge({
  size = "lg",
  priority = false,
}: {
  size?: "lg" | "md" | "sm";
  priority?: boolean;
}) {
  const width = size === "lg" ? 274 : size === "md" ? 230 : 200;
  return (
    // Official lockup: white competency mark + white wordmark. The right-hand
    // type is white, so this asset must sit on a black field. The PNG itself
    // is not recoloured, cropped or redrawn.
    <span className="inline-flex max-w-full bg-black">
      <Image
        src="/photos/aws-partner-ai-services-competency-agentic-ai.png"
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
}: {
  width?: number;
}) {
  return (
    <span className="inline-flex max-w-full bg-black">
      <Image
        src="/photos/aws-partner-advanced-tier-specializations.png"
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
          return <AwsAgenticBadge key={id} size="md" />;
        }
        if (id === "specializations") {
          return <AwsSpecializationsBadge key={id} width={280} />;
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
