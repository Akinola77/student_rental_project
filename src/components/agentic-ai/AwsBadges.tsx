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
