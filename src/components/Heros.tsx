import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function SectionHeading({
  title,
  light,
}: {
  title: string;
  light?: boolean;
}) {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-2xl md:text-3xl font-bold uppercase tracking-wider ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      <div className="w-12 h-1 bg-[#2F6FED] mx-auto mt-4" />
    </div>
  );
}

export function GradientHero({
  eyebrow,
  title,
  subtitle,
  primary,
  secondary,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-[#070b1a] pt-28 pb-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(47,111,237,0.35),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(168,85,247,0.2),transparent_45%)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-widest text-purple-300 mb-4">
            {eyebrow}
          </p>
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-cyan-300 mb-6 tracking-tight">
            {title}
          </h1>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
            {subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            {primary && (
              <Link
                href={primary.href}
                className="inline-flex items-center space-x-2 bg-[#2F6FED] hover:bg-[#1D54C2] text-white px-6 py-3 rounded text-sm font-bold transition-colors shadow-lg"
              >
                <span>{primary.label}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center space-x-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3 rounded text-sm font-bold transition-colors"
              >
                <span>{secondary.label}</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/photos/transformcloudjourney.jpg",
  imageAlt = "",
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  subtitle: string;
  image?: string;
  imageAlt?: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative min-h-[52vh] flex items-end overflow-hidden bg-black pt-32 pb-16">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        {eyebrow ? (
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-200 mb-4">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-white/85 max-w-2xl font-light">{subtitle}</p>
        {(primary || secondary) && (
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            {primary && (
              <Link
                href={primary.href}
                className="inline-flex items-center justify-center gap-2 bg-ocu-cyan hover:bg-[#1D54C2] text-white px-6 py-3.5 rounded-lg text-sm font-bold transition-colors shadow-lg min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>{primary.label}</span>
                <ArrowRight className="w-4 h-4" aria-hidden />
              </Link>
            )}
            {secondary && (
              <Link
                href={secondary.href}
                className="inline-flex items-center justify-center gap-2 bg-transparent text-white border border-white/30 hover:bg-white/10 px-6 py-3.5 rounded-lg text-sm font-bold transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
              >
                <span>{secondary.label}</span>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
