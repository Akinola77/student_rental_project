import Image from "next/image";
import type { ContentBlock } from "@/lib/insights";

export default function ArticleBody({ content }: { content: ContentBlock[] }) {
  return (
    <div className="insight-body space-y-6">
      {content.map((block, index) => {
        const key = `${block.type}-${index}`;
        if (block.type === "p") {
          return (
            <p key={key} className="text-lg leading-8 text-gray-700">
              {block.text}
            </p>
          );
        }
        if (block.type === "h2") {
          return (
            <h2
              key={key}
              className="pt-6 text-2xl font-bold text-ocu-blue md:text-3xl"
            >
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={key} className="pt-2 text-xl font-bold text-ocu-blue">
              {block.text}
            </h3>
          );
        }
        if (block.type === "ul") {
          return (
            <ul key={key} className="list-disc space-y-2 pl-6 text-lg leading-8 text-gray-700">
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          );
        }
        if (block.type === "ol") {
          return (
            <ol
              key={key}
              className="list-decimal space-y-2 pl-6 text-lg leading-8 text-gray-700"
            >
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ol>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote
              key={key}
              className="border-l-4 border-ocu-cyan bg-ocu-bg px-6 py-5 text-lg leading-8 text-ocu-blue"
            >
              <p>“{block.text}”</p>
              {block.attribution ? (
                <footer className="mt-3 text-sm font-semibold text-gray-600">
                  {block.attribution}
                </footer>
              ) : null}
            </blockquote>
          );
        }
        const fit = block.fit ?? "contain";
        return (
          <figure key={key} className="overflow-hidden rounded-2xl border border-gray-100 bg-ocu-bg">
            <div className="relative min-h-[240px] w-full md:min-h-[360px]">
              <Image
                src={block.src}
                alt={block.alt}
                fill
                sizes="(min-width: 1024px) 720px, 100vw"
                className={fit === "cover" ? "object-cover" : "object-contain p-4"}
              />
            </div>
            {block.caption ? (
              <figcaption className="px-4 py-3 text-sm text-gray-500">
                {block.caption}
              </figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}
