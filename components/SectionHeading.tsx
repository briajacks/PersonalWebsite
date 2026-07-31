import Reveal from "@/components/Reveal";

/** Consistent heading block used at the top of every section. */
export default function SectionHeading({
  eyebrow,
  title,
  blurb,
  as: Heading = "h2",
}: {
  eyebrow: string;
  title: string;
  blurb?: string;
  /** Use "h1" when the heading opens a standalone page. */
  as?: "h1" | "h2";
}) {
  return (
    <Reveal className="mb-12 sm:mb-16">
      <p className="mb-3 text-sm font-semibold tracking-[0.2em] uppercase bg-gradient-to-r from-violet-600 via-fuchsia-600 to-amber-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-amber-400">
        {eyebrow}
      </p>
      <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
        {title}
      </h2>
      {blurb && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
          {blurb}
        </p>
      )}
    </Reveal>
  );
}
